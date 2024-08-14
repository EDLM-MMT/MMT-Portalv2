import NavyPersonnel from "@/pages/execStakeholder/personnelData/navy";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

jest.mock('react-apexcharts', () => ({ __esModule: true, default: () => <div /> }));

describe("Navy Personnel Data page", () => {

    it("should render the page", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <NavyPersonnel />
        </MemoryRouterProvider>
      );

      expect(getByText('Navy Personnel Data')).toBeInTheDocument();
      expect(getByText("Average Credits Taken by Each Pay Grade")).toBeInTheDocument();
      expect(getByText('Total Personnel by Pay Grade Enrolled')).toBeInTheDocument();
      expect(getByText('Total Credits Taken by Each Pay Grade')).toBeInTheDocument();

      const button = getByText('Personnel Data by Branch');
      act(() => {
          fireEvent.click(button);
      });

    });

});
