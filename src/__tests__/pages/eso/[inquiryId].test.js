import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import axios from 'axios'
import ESOInquiryView from "@/pages/eso/inquiries/[inquiryId]";


let url = ''
let body = {}

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
            <ESOInquiryView />
        </MemoryRouterProvider>
    );

    expect(getByText('Inquiry')).toBeInTheDocument();
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
            <ESOInquiryView />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: []});

    expect(getByText('ESO Inquiries')).toBeInTheDocument();
   
    const button = getByText('ESO Inquiries');
    act(() => {
        fireEvent.click(button);
    });

  });

});
