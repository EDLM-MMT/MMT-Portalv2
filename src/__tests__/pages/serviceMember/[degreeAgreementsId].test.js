import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import axios from 'axios'
import DegreeAgreementsView from "@/pages/serviceMember/degreeAgreements/[degreeAgreementsId]";

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

describe("Degree Agreements View  Page", () => {
  it("should render the component", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <DegreeAgreementsView />
        </MemoryRouterProvider>
    );

    expect(getByText('My Degree Agreements')).toBeInTheDocument();
    expect(getByText('Course Number')).toBeInTheDocument();
    expect(getByText('Course Name')).toBeInTheDocument();
    expect(getByText('Credit Hours')).toBeInTheDocument();
    expect(getByText('Status')).toBeInTheDocument();
    expect(getByText('Semester')).toBeInTheDocument();

  });

  it("should navigate to degree agreements", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <DegreeAgreementsView />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: []});

    expect(getByText('My Degree Agreements')).toBeInTheDocument();
   
    const button = getByText('My Degree Agreements');
    act(() => {
        fireEvent.click(button);
    });

  });

  it("axios error", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <DegreeAgreementsView />
        </MemoryRouterProvider>
    );

    axios.get.mockRejectedValueOnce(new Error('some error'));

  });

});
