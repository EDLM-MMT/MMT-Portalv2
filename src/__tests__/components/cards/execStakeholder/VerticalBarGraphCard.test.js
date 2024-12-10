import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import VerticalBarGraphStatisticsViewCard from "@/components/cards/execStakeholder/VerticalBarGraphCard";

describe("Vertical Bar Graph Card component", () => {

  it("should render the component", () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <VerticalBarGraphStatisticsViewCard title={"test title"} />
      </MemoryRouterProvider>
    );

    expect(getByText("test title")).toBeInTheDocument();
 

  });

});
