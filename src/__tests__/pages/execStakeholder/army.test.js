import ArmyPersonnel from "@/pages/execStakeholder/personnelData/army";
import { fireEvent, render } from "@testing-library/react";
import {act} from 'react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

jest.mock('react-apexcharts', () => ({ __esModule: true, default: () => <div /> }));

describe("Army Personnel Data page", () => {

    it("should render the page", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <ArmyPersonnel />
        </MemoryRouterProvider>
      );

      expect(getByText('Army Personnel Data')).toBeInTheDocument();
      expect(getByText("Average Credits Taken by Each Pay Grade")).toBeInTheDocument();
      expect(getByText('Total Personnel by Pay Grade Enrolled')).toBeInTheDocument();
      expect(getByText('Total Credits Taken by Each Pay Grade')).toBeInTheDocument();

      const button = getByText('Personnel Data by Branch');
      act(() => {
          fireEvent.click(button);
      });

    });

});
