import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import ResetPassword from "../../pages/resetPassword";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }))
  
describe("Reset password page", () => {

    it("should render the page", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <ResetPassword />
        </MemoryRouterProvider>
      );

      expect(getByText(/Change Password/i)).toBeInTheDocument();
    });

    it("should change the text in the form field", () => {
      const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
          <ResetPassword />
        </MemoryRouterProvider>
      );

      act(() => {
        fireEvent.change(getByPlaceholderText('New Password'), {
            target: { value: 'test' },
          });
      });

      act(() => {
        fireEvent.change(getByPlaceholderText('Confirm New Password'), {
            target: { value: 'test' },
          });
      });

      const UpdateButton = getByText('Update Password');
      act(() => {
          fireEvent.click(UpdateButton);
      });

    });

    it("should click the button", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <ResetPassword />
        </MemoryRouterProvider>
      );
  
      const cancelButton = getByText('Cancel');
      act(() => {
          fireEvent.click(cancelButton);
      });

      const UpdateButton = getByText('Update Password');
      act(() => {
          fireEvent.click(UpdateButton);
      });
    });

    it("should check for wrong password in the form field", () => {

      const mockIntersectionObserver = jest.fn();
      mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null
      });
      window.IntersectionObserver = mockIntersectionObserver;
      
      const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
          <ResetPassword />
        </MemoryRouterProvider>
      );

      act(() => {
        fireEvent.change(getByPlaceholderText('New Password'), {
            target: { value: 'test' },
          });
      });

      act(() => {
        fireEvent.change(getByPlaceholderText('Confirm New Password'), {
            target: { value: 'test2' },
          });
      });

      const UpdateButton = getByText('Update Password');
      act(() => {
          fireEvent.click(UpdateButton);
      });

    });

});