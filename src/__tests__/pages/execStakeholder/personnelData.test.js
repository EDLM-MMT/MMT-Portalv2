import PersonnelData from "@/pages/execStakeholder/personnelData/index";
import { fireEvent, render } from "@testing-library/react";
import {act} from 'react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe("Personnel Data page", () => {

    it("should render the page", () => {
      const { getByText, getByTestId } = render(
        <MemoryRouterProvider>
          <PersonnelData />
        </MemoryRouterProvider>
      );

      expect(getByText('Personnel Data by Branch')).toBeInTheDocument();
      expect(getByText("Army")).toBeInTheDocument();
      expect(getByText('Navy')).toBeInTheDocument();

      const button = getByTestId('toggle');
      act(() => {
          fireEvent.click(button);
      });

    });

});
