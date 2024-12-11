import ForgotPassword from "@/pages/forgotPassword";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe("Forgot password page", () => {

    it("should render the page", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <ForgotPassword />
        </MemoryRouterProvider>
      );

      expect(getByText('Forgot Password')).toBeInTheDocument();
      expect(getByText(/Cancel/i)).toBeInTheDocument();
      expect(getByText(/Reset Password/i)).toBeInTheDocument();

    });

    it("should change the text in the form field", () => {
      const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
          <ForgotPassword />
        </MemoryRouterProvider>
      );

      act(() => {
        fireEvent.change(getByPlaceholderText('Email'), {
            target: { value: 'test' },
          });
      });

      const button = getByText('Reset Password');
      act(() => {
          fireEvent.click(button);
      });

    });

    it("should click the button", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <ForgotPassword />
        </MemoryRouterProvider>
      );
  
      const cancelButton = getByText('Cancel');
      act(() => {
          fireEvent.click(cancelButton);
      });

    });

    it("should click the button", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <ForgotPassword />
        </MemoryRouterProvider>
      );

      const UpdateButton = getByText('Reset Password');
      act(() => {
          fireEvent.click(UpdateButton);
      });
    });

    it("should navigate to Login", () => {
      const { getByText } = render(
          <MemoryRouterProvider>
              <ForgotPassword />
          </MemoryRouterProvider>
      );
      
      expect(getByText('Login')).toBeInTheDocument();
      
      const button = getByText('Login');
      act(() => {
          fireEvent.click(button);
      });
  
    });

});
