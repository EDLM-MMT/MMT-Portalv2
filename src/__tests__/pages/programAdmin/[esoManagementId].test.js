import ESOManagementView from "@/pages/programAdmin/esoManagement/[esoManagementId]";
import { fireEvent, render } from "@testing-library/react";
import { act } from 'react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import 'react-minimal-pie-chart';
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

jest.mock('react-minimal-pie-chart', () => {
  const OriginalModule = jest.requireActual('react-minimal-pie-chart')
  return {
      ...OriginalModule,
      ResponsiveContainer: ({ children }) => (
          <OriginalModule.ResponsiveContainer width={800} height={800}>
              {children}
          </OriginalModule.ResponsiveContainer>
      ),
  }
})

describe("ESO Management View page", () => {

  it("should render the page", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <ESOManagementView esoManagementId={500}/>
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: "test data"}); 

    expect(getByText('- ESO')).toBeInTheDocument();
    expect(getByText('Permissions:')).toBeInTheDocument();
    expect(getByText('Assigned Tasks')).toBeInTheDocument();
    expect(getByText('Statistics')).toBeInTheDocument();

  });

  it("should render the table", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <ESOManagementView esoManagementId={500}/>
        </MemoryRouterProvider>
    );
    expect(getByText('Task ID')).toBeInTheDocument();
    expect(getByText('Service Member Name')).toBeInTheDocument();
    expect(getByText('Branch')).toBeInTheDocument();
    expect(getByText('Inquiry/Career Path')).toBeInTheDocument();
    expect(getByText('Status')).toBeInTheDocument();
    expect(getByText('Task Duration')).toBeInTheDocument();
  });

  it("should click the edit button", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <ESOManagementView esoManagementId={500}/>
        </MemoryRouterProvider>
    );

    const viewButton = getByText('Edit');
    act(() => {
      fireEvent.click(viewButton);
    });

    const saveButton = getByText('Save');
    act(() => {
      fireEvent.click(saveButton);
    });

  });

  it("route back to ESOManagement page", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <ESOManagementView esoManagementId={500}/>
        </MemoryRouterProvider>
    );

    const button = getByText('ESO Management');
    act(() => {
      fireEvent.click(button);
    });
  });

  it("axios error", () => {
    render(
        <MemoryRouterProvider>
            <ESOManagementView esoManagementId={500}/>
        </MemoryRouterProvider>
    );

    axios.get.mockRejectedValueOnce(new Error('some error'));

  });

});