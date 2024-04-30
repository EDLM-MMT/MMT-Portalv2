import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import DropdownViewCard from "@/components/cards/execStakeholder/DropdownSelectViewCard";

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
