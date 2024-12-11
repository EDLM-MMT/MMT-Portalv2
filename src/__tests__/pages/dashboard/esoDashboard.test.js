import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import ESODashboard from "@/pages/dashboard/eso/esoDashboard";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe("Program Admin Dashbaord Page", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <ESODashboard />
        </MemoryRouterProvider>
    );
    
    expect(getByText('ESO Inquiries')).toBeInTheDocument();
    expect(getByText('Go to ESO Inquiries')).toBeInTheDocument();
    expect(getByText('Counseling')).toBeInTheDocument();
    expect(getByText('Go to Counseling')).toBeInTheDocument();

  });
});
