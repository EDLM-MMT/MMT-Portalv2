import Accordion from "@/components/Accordion";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';


describe("Accordion component", () => {

    it("should render the component", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <Accordion title={"Title"} content={"content"} />
        </MemoryRouterProvider>
      );

      expect(getByText(/Title/i)).toBeInTheDocument();

      const button = getByText('Title');
      act(() => {
          fireEvent.click(button);
      });
      expect(getByText(/content/i)).toBeInTheDocument();

    });
});
