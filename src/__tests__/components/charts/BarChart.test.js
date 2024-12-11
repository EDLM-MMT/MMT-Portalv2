import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import BarChart from "@/components/charts/BarChart";


global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))


jest.mock('react-apexcharts', () => ({ __esModule: true, default: () => <div /> }));

describe("Bar Chart component", () => {

  it("should render the component", () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <BarChart chartTitle={"test title"} xAxisTitle="x Axis"/>
      </MemoryRouterProvider> 
    );

    //  expect(getByText('test title')).toBeInTheDocument();
 
  });

});
