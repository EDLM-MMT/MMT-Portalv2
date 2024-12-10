import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import DropdownViewCard from "@/components/cards/execStakeholder/DropdownSelectViewCard";
import BarChart from "@/components/charts/BarChart";

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
