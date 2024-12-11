import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Credits from "@/pages/serviceMember/credits/index";
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

describe("Credits Page", () => {
  const data = {
    "credits": [
        {
            "courseNumber": "ENG 101",
            "courseName": "English Composition I",
            "coursesCatagory": "Foundations Studies",
            "reqHours": "3",
            "potentialCredit": "Transfer (3)",
            "hoursNeeded": "0"
        },
      ]
    }

  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <Credits />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: data}); 

    expect(getByText('Credits Translation Page')).toBeInTheDocument();
    expect(getByText('Credits')).toBeInTheDocument();

    const button = getByText('Degree Pathways Catalog');
    act(() => {
        fireEvent.click(button);
    });

  });

});
