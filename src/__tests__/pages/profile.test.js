import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Profile from "@/pages/profile";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe("Profile Component", () => {
  it("should render the component", () => {
    const { getByText, getAllByText } = render(
        <MemoryRouterProvider>
            <Profile />
        </MemoryRouterProvider>
    );
    expect(getByText('Profile')).toBeInTheDocument();
    expect(getByText('First name')).toBeInTheDocument();
    expect(getByText('Last name')).toBeInTheDocument();
    expect(getByText('Email')).toBeInTheDocument();
    expect(getByText('Position/Role')).toBeInTheDocument();
    expect(getByText('Update')).toBeInTheDocument();

    const button = getByText('Update');
    act(() => {
        fireEvent.click(button);
    });

  });
});
