import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Inquiry from "@/pages/programAdmin/inquiries";
import axios from "axios";

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

describe("Inquiries Page", () => {

  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <Inquiry />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: "data"});
    expect(getByText('Inquiries')).toBeInTheDocument();

  });


  it("should check the search bar in the component", () => {
    const { getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <Inquiry />
        </MemoryRouterProvider>
    );
    expect(getByPlaceholderText('Search by Service Member Name')).toBeInTheDocument();
    
    act(() => {
      fireEvent.change(getByPlaceholderText('Search by Service Member Name'), {
          target: { value: '' },
      });
    });

    act(() => {
        fireEvent.change(getByPlaceholderText('Search by Service Member Name'), {
            target: { value: 'Bill Phillips' },
        });
    });

    act(() => {
        fireEvent.change(getByPlaceholderText('Search by Service Member Name'), {
            target: { value: 'Zack Blanchard' },
        });
    });
  });

  test('axios error', () => {
    const { getByText, } = render(
      <MemoryRouterProvider url='/'>
        <Inquiry />
      </MemoryRouterProvider>
    );
    
    axios.get.mockRejectedValueOnce(new Error('some error'));

    expect(getByText('Inquiries')).toBeInTheDocument();
  });

});
