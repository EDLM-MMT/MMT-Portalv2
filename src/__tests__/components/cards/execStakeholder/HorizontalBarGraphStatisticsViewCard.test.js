import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import BarGraphStatisticsViewCard from "@/components/cards/execStakeholder/HorizontalBarGraphStatisticsViewCard";

describe("Horizontal Bar Graph Statistics View Card component", () => {

  it("should render the component", () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <BarGraphStatisticsViewCard title={"test title"} />
      </MemoryRouterProvider>
    );

    expect(getByText("test title")).toBeInTheDocument();

    const button = getByText('Personnel Percent');
      act(() => {
          fireEvent.click(button);
      });
 

  });

});
