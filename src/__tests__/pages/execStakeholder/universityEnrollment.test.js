import UniversityEnrollment from "@/pages/execStakeholder/universityEnrollment/index";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe("State Enrollment page", () => {

    it("should render the page", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <UniversityEnrollment />
        </MemoryRouterProvider>
      );

      expect(getByText('University Enrollment Statistics')).toBeInTheDocument();
      expect(getByText("Overall Statistics")).toBeInTheDocument();
      expect(getByText('Active Service Members Enrolled')).toBeInTheDocument();
      expect(getByText('Institute Statistics')).toBeInTheDocument();

      const button = getByText('Personnel Percent');
      act(() => {
          fireEvent.click(button);
      });
      act(() => {
        fireEvent.click(getByText('Total Personnel'));
      });
      act(() => {
        fireEvent.click(getByText('Total Personnel'));
      });
      act(() => {
        fireEvent.click(button);
      });

    });

});
