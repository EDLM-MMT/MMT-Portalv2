import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import ProgramAdminDashboard from "@/pages/dashboard/programAdmin/programAdminDashboard";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe("Program Admin Dashbaord Page", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <ProgramAdminDashboard />
        </MemoryRouterProvider>
    );

    expect(getByText('Accounts Management')).toBeInTheDocument();
    expect(getByText('Go to Accounts Management')).toBeInTheDocument();
    expect(getByText('ESO Management')).toBeInTheDocument();
    expect(getByText('Go to ESO Management')).toBeInTheDocument();
    
  });
});
