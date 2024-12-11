import StateEnrollment from "@/pages/execStakeholder/stateEnrollment/index";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

jest.mock('react-apexcharts', () => ({ __esModule: true, default: () => <div /> }));

describe("State Enrollment page", () => {

    it("should render the page", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <StateEnrollment />
        </MemoryRouterProvider>
      );

      expect(getByText('State Enrollment Statistics')).toBeInTheDocument();
      expect(getByText("Overall Statistics")).toBeInTheDocument();
      expect(getByText('State Statistics')).toBeInTheDocument();

      const button = getByText('Florida');
      act(() => {
          fireEvent.click(button);
      });
      act(() => {
        fireEvent.click(getByText('Georgia'));
      });

    });

});
