import { fireEvent, render } from "@testing-library/react";
import { act } from 'react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import DegreeAgreements from "@/pages/serviceMember/degreeAgreements";
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
