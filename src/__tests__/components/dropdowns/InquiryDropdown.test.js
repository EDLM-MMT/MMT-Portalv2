import InquiryDropdown from "@/components/dropdowns/InquiryDropdown";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe("Inquiry Dropdown component", () => {

    const onChange = jest.fn()
    it("should render the component", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <InquiryDropdown options={["School", "Major", "MOS Code"]} initialValue={"School"} onChange={onChange}/>
        </MemoryRouterProvider>
      );
      expect(getByText(/School/i)).toBeInTheDocument();
      const button = getByText('School');
      act(() => {
          fireEvent.click(button);
      });
      const button2 = getByText('Major');
      act(() => {
          fireEvent.mouseOver(getByText('Major'));
          fireEvent.click(button2);
      });

    });
});
