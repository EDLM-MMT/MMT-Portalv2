import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import mockAxios from 'jest-mock-axios';
import DegreeAgreements from "@/pages/serviceMember/degreeAgreements";
import axios from 'axios'

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

describe("Degree Agreements Page", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <DegreeAgreements />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: []});

    expect(getByText('My Degree Agreements')).toBeInTheDocument();
    expect(getByText('Start New Degree Agreement')).toBeInTheDocument();

    const button = getByText('Start New Degree Agreement');
    act(() => {
        fireEvent.click(button);
    });

  });

});
