import CoastGuardPersonnel from "@/pages/execStakeholder/personnelData/coastGuard";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe("Coast Guard Personnel Data page", () => {

    it("should render the page", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <CoastGuardPersonnel />
        </MemoryRouterProvider>
      );

      expect(getByText('Coast Guard Personnel Data')).toBeInTheDocument();
      expect(getByText("Average Credits Taken by Each Pay Grade")).toBeInTheDocument();
      expect(getByText('Total Personnel by Pay Grade Enrolled')).toBeInTheDocument();
      expect(getByText('Total Credits Taken by Each Pay Grade')).toBeInTheDocument();

      const button = getByText('Personnel Data by Branch');
      act(() => {
          fireEvent.click(button);
      });

    });

});
