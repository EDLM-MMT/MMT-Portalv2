import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import ExecStakeholderDashboard from "@/pages/dashboard/execStakeholder/execStakeholderDashboard";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe("ExecStakeholder Dashboard Page", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <ExecStakeholderDashboard />
        </MemoryRouterProvider>
    );
    
    expect(getByText('Executive Stakeholder Dashboard')).toBeInTheDocument();
    expect(getByText('Enrollment Statistics')).toBeInTheDocument();
    expect(getByText('Go to Enrollment By University')).toBeInTheDocument();
    expect(getByText('Personnel Data by Branch')).toBeInTheDocument();

  });
});
