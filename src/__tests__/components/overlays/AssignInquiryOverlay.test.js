import { fireEvent, render } from "@testing-library/react";
import { act } from "react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import AssignInquiryOverlay from "../../../components/overlays/AssignInquiryOverlay";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))


describe("Assign Inquiry Overlay component", () => {

  const onToggle = jest.fn()
  it("should render the component", () => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;

    const { getByText } = render(
      <MemoryRouterProvider>
        <AssignInquiryOverlay toggleModal={onToggle}/>
      </MemoryRouterProvider>
    );

    expect(getByText(/Assign Inquiry/i)).toBeInTheDocument();
    expect(getByText(/Choose Assignee:/i)).toBeInTheDocument();
    expect(getByText(/Cancel/i)).toBeInTheDocument();
    expect(getByText(/Save/i)).toBeInTheDocument();

    const button = getByText('Cancel');
      act(() => {
          fireEvent.click(button);
      });
  });

  it("should render the component", () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouterProvider>
        <AssignInquiryOverlay toggleModal={onToggle}/>
      </MemoryRouterProvider>
    );

    expect(getByPlaceholderText('Email Address / Account Name')).toBeInTheDocument();
    expect(getByText(/Save/i)).toBeInTheDocument();

    act(() => {
      fireEvent.change(getByPlaceholderText('Email Address / Account Name'), {
          target: { value: 'test@gmail.com' },
        });
    });
    
    const button = getByText('Save');
      act(() => {
          fireEvent.click(button);
      });
  });

});
