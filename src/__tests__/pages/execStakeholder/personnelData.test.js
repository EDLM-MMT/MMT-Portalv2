import PersonnelData from "@/pages/execStakeholder/personnelData/index";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

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
