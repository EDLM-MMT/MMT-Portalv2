import { fireEvent, render } from "@testing-library/react";
import { act } from 'react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Register from '../../pages/register';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe("Register page", () => {

  it("should render the page", () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <Register />
      </MemoryRouterProvider>
    );
    expect(getByText(/Create your account/i)).toBeInTheDocument();
    expect(getByText(/Sign in to your Account/i)).toBeInTheDocument();
    expect(getByText(/Register/i)).toBeInTheDocument();
  });

  it("should fill the form fields", () => {
    const { getByPlaceholderText } = render(
      <MemoryRouterProvider>
          <Register />
      </MemoryRouterProvider>
  );

    act(() => {
      fireEvent.change(getByPlaceholderText('First Name'), {
          target: { value: 'test' },
        });
    });
    act(() => {
      fireEvent.change(getByPlaceholderText('Last Name'), {
          target: { value: 'test' },
        });
    });
    act(() => {
      fireEvent.change(getByPlaceholderText('Email'), {
          target: { value: 'test@gmail.com' },
        });
    });
    act(() => {
      fireEvent.change(getByPlaceholderText('Password'), {
          target: { value: 'Test123!@#' },
        });
    });
    act(() => {
      fireEvent.change(getByPlaceholderText('Confirm Password'), {
          target: { value: 'Test123!@#' },
        });
    });
  });

  it("should click the button", () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <Register />
      </MemoryRouterProvider>
    );

    const registerButton = getByText('Register');
    act(() => {
        fireEvent.click(registerButton);
    });
  });

  it("should click the button", () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <Register />
      </MemoryRouterProvider>
    );

    const signInButton = getByText('Sign in to your Account');
    act(() => {
        fireEvent.click(signInButton);
    });
  });

  
});
