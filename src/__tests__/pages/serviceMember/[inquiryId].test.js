import InquiryView from "@/pages/serviceMember/inquiries/[inquiryId]";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import axios from 'axios'

let url = ''
let body = {}

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))


jest.mock("axios", () => ({
  get: jest.fn((_url, _body) => { 
    return new Promise((resolve) => {
      url = _url
      body = _body
      resolve(true)
    })
  })
}))

describe("Inquiry View Page", () => {
  it("should render the component", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <InquiryView />
        </MemoryRouterProvider>
    );

    
    expect(getByText('My Inquiries')).toBeInTheDocument();
    expect(getByText('Add a comment:')).toBeInTheDocument();
    expect(getByText('Post')).toBeInTheDocument();
    expect(getByText('Inquiry Communication Timeline')).toBeInTheDocument();

    act(() => {
        fireEvent.change(getByPlaceholderText('Please provide comments if necessary.'), {
            target: { value: 'test' },
          });
    });

    const button = getByText('Post');
    act(() => {
        fireEvent.click(button);
    });

  });

  it("should navigate to inquiries", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <InquiryView />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: []});

    expect(getByText('My Inquiries')).toBeInTheDocument();
   
    const button = getByText('My Inquiries');
    act(() => {
        fireEvent.click(button);
    });

  });

  it("should close the inquiry", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <InquiryView />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: []});

    expect(getByText('Close Inquiry')).toBeInTheDocument();
   
    const button = getByText('Close Inquiry');
    act(() => {
        fireEvent.click(button);
    });

    const button1 = getByText('Reopen Inquiry');
    act(() => {
        fireEvent.click(button1);
    });
  });

});
