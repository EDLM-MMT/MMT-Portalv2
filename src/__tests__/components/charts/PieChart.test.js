import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import DropdownViewCard from "@/components/cards/execStakeholder/DropdownSelectViewCard";
import PieChart from "@/components/charts/PieChart";

jest.mock('react-apexcharts', () => ({ __esModule: true, default: () => <div /> }));

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe("Pie Chart component", () => {


  it("should render the component", () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <PieChart title={'test title'} series={[12345, 67890]} labels={["Active", "Separated"]} customLables={["Active Personnel Enrolled", "Separated Personnel Enrolled"]}/>
      </MemoryRouterProvider>
    );
  });

});
