import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import ESOInquiryDashboard from "@/pages/eso/inquiries";
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

describe("InquiriesPage", () => {

  const data = {
    "inquiries": [
      {
        "id": 300,
        "title": "Leadership Course",
        "description": "Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet. ",
        "status": "Close Inquiry",
        "inquiry_status": "Open",
        "firstRoutePath": "transcripts/basicTranscript",
        "secondRoutePath": "inquiries/300",
        "timestampCreated": "1/21/2023 1:43:20 PM",
        "submitted_by": "Bill Phillips",
        "inquiryComments": [
            {
                "author": "John Doe",
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
      },
      {
        "id": 300,
        "title": "Leadership Course",
        "description": "Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet. ",
        "status": "Open Inquiry",
        "inquiry_status": "Closed",
        "firstRoutePath": "transcripts/basicTranscript",
        "secondRoutePath": "inquiries/300",
        "timestampCreated": "1/21/2023 1:43:20 PM",
        "submitted_by": "Bill Phillips",
        "inquiryComments": [
            {
                "author": "John Doe",
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
      }
    ]
  }
  
  test("should render the component", async() => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <ESOInquiryDashboard />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: data});
 
    expect(getByText('ESO Inquiries')).toBeInTheDocument();

    
  });

});
