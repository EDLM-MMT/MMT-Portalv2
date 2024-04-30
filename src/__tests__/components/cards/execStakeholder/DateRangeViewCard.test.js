import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import DateRangeViewCard from "@/components/cards/execStakeholder/DateRangeViewCard";

describe("Date Range View Card component", () => {

  it("should render the component", () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <DateRangeViewCard title={"test title"} width={"1/2"} />
      </MemoryRouterProvider>
    );

    expect(getByText("test title")).toBeInTheDocument();
    expect(getByText("Start Date")).toBeInTheDocument();
    expect(getByText("End Date")).toBeInTheDocument();
    expect(getByText("Total Personnel Enrolled:")).toBeInTheDocument();
    expect(getByText("Active Personnel Enrolled:")).toBeInTheDocument();
    expect(getByText("Separated Personnel Enrolled:")).toBeInTheDocument();

    const button = getByText('Search');
    act(() => {
        fireEvent.click(button);
    });

  });

});