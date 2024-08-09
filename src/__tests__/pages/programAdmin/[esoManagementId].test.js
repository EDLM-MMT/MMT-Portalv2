import ESOManagementView from "@/pages/programAdmin/esoManagement/[esoManagementId]";
import { act, fireEvent, render } from "@testing-library/react";
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
  const data = {
    "id":"500",
    "name": "John Smith",
    "permissions": "Counseling",
    "branch": "Army",
    "workload": "4",
    "viewProfile": "View",
    "inProgressTasks": 35,
    "notStartedTasks": 12,
    "completedTasks": 16,
    "totalTasks": 63,
    "avgTime": "12 days",
    "tasks": [
        {
            "taskId":"602",
            "name": "Zach Blanchard",
            "branch": "Army",
            "title": "Computer Science",
            "status": "In Progress",
            "duration": "3 Days"
        },
        {
            "taskId":"605",
            "name": "Aimee Wallis",
            "branch": "Army",
            "title": "Data Science",
            "status": "In Progress",
            "duration": "5 Days"
        },
        {
            "taskId":"607",
            "name": "Alexia Jacobs",
            "branch": "Army",
            "title": "Computer Engineer",
            "status": "Not Started",
            "duration": "-"
        },
        {
            "taskId":"607",
            "name": "Jennie Haywards",
            "branch": "Army",
            "title": "Buisness Administration",
            "status": "Done",
            "duration": "8 days"
        }
    ]
  }

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
    const { getByText, getByPlaceholderText } = render(
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
    const { getByText, getByPlaceholderText } = render(
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
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <ESOManagementView esoManagementId={500}/>
        </MemoryRouterProvider>
    );

    axios.get.mockRejectedValueOnce(new Error('some error'));

  });

});