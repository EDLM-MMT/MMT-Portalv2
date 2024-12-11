import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import DropdownViewCard from "@/components/cards/execStakeholder/DropdownSelectViewCard";


global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

jest.mock('react-apexcharts', () => ({ __esModule: true, default: () => <div /> }));


describe("Dropdown Select View Card component", () => {

  it("should render the component", () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <DropdownViewCard title={"test title"} option={["option1","option2"]} width={"1/2"} />
      </MemoryRouterProvider>
    );

    expect(getByText("test title")).toBeInTheDocument();
 

  });

});
