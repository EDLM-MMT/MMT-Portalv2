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

  const data = {
    "id": 300,
    "title": "Leadership Course",
    "description": "Course authorization required to join class to complete as a part of my degree. This is the first course for the required classes in the Buisness admin specialization track. This is my choosen elective class that approval is required for.",
    "status": "Close Inquiry",
    "inquiry_status": "Open",
    "firstRoutePath": "transcripts/basicTranscript",
    "secondRoutePath": "inquiries/300",
    "timestampCreated": "1/21/2023 1:43:20 PM",
    "submitted_by": "Bill Phillips",
    "inquiryComments": [
        {
            "author": "Brinleigh Blanchard",
            "title": "ESO",
            "comment": "Please provide more information to better assist you on our end",
            "timestamp": "1/24/2023 2:43:20 PM"
        },
        {
            "author": "Bill Phillips",
            "title": "",
            "comment": "Can I please get an ETA on when this can be resolved?",
            "timestamp": "1/24/2023 2:43:19 PM"
        }
    ]
  };

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
