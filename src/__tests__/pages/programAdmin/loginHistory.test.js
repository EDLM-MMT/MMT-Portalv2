import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import LoginHistory from "@/pages/programAdmin/loginHistory";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe("Login History Page", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <LoginHistory />
        </MemoryRouterProvider>
    );

    expect(getByText('Login History')).toBeInTheDocument();
    expect(getByText('Account Support')).toBeInTheDocument();
    expect(getByText('Date/Time')).toBeInTheDocument();
    expect(getByText('Trascripts')).toBeInTheDocument();
    expect(getByText('Inquiries')).toBeInTheDocument();
    expect(getByText('Degree Agreements')).toBeInTheDocument();
    expect(getByText('Degree Pathways')).toBeInTheDocument();

    const button = getByText('Account Support');
    act(() => {
        fireEvent.click(button);
    });

  });

});
