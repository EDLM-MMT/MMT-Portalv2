import NewInquiry from "@/pages/serviceMember/newInquiry";
import { fireEvent, render } from "@testing-library/react";
import {act} from 'react';
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

describe("New Inquiry Page", () => {
  it("should render the component", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <NewInquiry />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: "data"}); 

    expect(getByText('New Inquiry')).toBeInTheDocument();
    expect(getByText('Type of Issue')).toBeInTheDocument();
    expect(getByText('Type of Issues')).toBeInTheDocument();
    expect(getByText('Common Solution')).toBeInTheDocument();

  });

  it("should navigate to inquiries", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <NewInquiry />
        </MemoryRouterProvider>
    );

    expect(getByText('My Inquiries')).toBeInTheDocument();
    const button = getByText('My Inquiries');
    act(() => {
        fireEvent.click(button);
    });

  });

  it("should change dropdown", () => {
    const data = {
      "common_issues": [
          {
              "issue": "How do I view and print my student copy/unofficial transcript?",
              "solution": "Click on the 'My Transcripts' link that is located at the top of the page. After you click the link, another screen will appear and you can click 'Download' then 'PDF' and it will open as an Adobe PDF file. You will be able to view and print the PDF version of your transcript."
          },
          {
              "issue": "Academic Institution Courses",
              "solution": "College courses taken while on active duty: If TA or NCPACE they should automatically show up on your transcript. Active Duty and Veterans: TA/NCPACE issues should be sent to SFLY_TA.Navy@navy.mil Other funded courses (i.e. CCAF, MGIB funded, etc.) (3 Options)  Have official transcript mailed from institution to the Operations Center. Bring Official transcript to the Lifelong Learning Center to have certified and faxed to the Operations Center. Have Official Transcript certified or notarized and mail to the Operations Center.  Mailing address: NETC - ATTN Operations Center, N644, 6490 Saufley Field Road, Pensacola, FL 32509"
          },
          {
              "issue": "How do I request an official transcript?",
              "solution": "The application is set up to send official electronic transcripts to institutes so for the most part transcripts are delivered electronically. Official transcripts are not provided to individuals. If you need to have a transcript special mailed please complete a Special Mail Request form with the employer/program information and upload to this website, fax, or e-mail. A point-of-contact must be included on the form or request will not be processed."
          },
          {
              "issue": "How do I start counseling?",
              "solution": "Click on the 'Degree Pathways Catalog' link that is located at the top of the page. After you click the link, another screen will appear where you can browse the degree options. Once you like a major/program, click the 'Add to List' button, this will add the degree program to your counseling dashboard. You can click on 'Go to Counseling' anytime from there."
          }
  
      ]
  }

    const { getByText } = render(
        <MemoryRouterProvider>
            <NewInquiry />
        </MemoryRouterProvider>
    );
    axios.get.mockResolvedValue({data: data}); 

    expect(getByText('Type of Issues')).toBeInTheDocument();
    const button = getByText('Type of Issues');
    act(() => {
        fireEvent.click(button);
    });

    const button1 = getByText('Academic Institution Courses');
    act(() => {
        fireEvent.click(button1);
    });

  });

  it("should click need assistance button", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <NewInquiry />
        </MemoryRouterProvider>
    );

    expect(getByText('I still need asssitance')).toBeInTheDocument();
    const button = getByText('I still need asssitance');
    act(() => {
        fireEvent.click(button);
    });

  });


  it("axios error", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <NewInquiry />
        </MemoryRouterProvider>
    );

    axios.get.mockRejectedValueOnce(new Error('some error'));

  });

});
