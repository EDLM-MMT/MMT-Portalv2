import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import axios from 'axios'
import ProgramAdminInquiryView from "@/pages/programAdmin/inquiries/[inquiryId]";

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
            <ProgramAdminInquiryView />
        </MemoryRouterProvider>
    );

    expect(getByText('Inquiry')).toBeInTheDocument();
    expect(getByText('Program Admin Inquiries')).toBeInTheDocument();
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
            <ProgramAdminInquiryView />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: []});

    expect(getByText('Program Admin Inquiries')).toBeInTheDocument();

    const button = getByText('Program Admin Inquiries');
    act(() => {
        fireEvent.click(button);
    });

  });

});
