import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import VerticalBarGraphStatisticsViewCard from "@/components/cards/execStakeholder/VerticalBarGraphCard";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

jest.mock('react-apexcharts', () => ({ __esModule: true, default: () => <div /> }));

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
