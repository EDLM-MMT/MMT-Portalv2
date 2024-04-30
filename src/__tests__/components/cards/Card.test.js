import { act, fireEvent, render } from "@testing-library/react";
import Card from "@/components/cards/Card";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe("Card Component", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <Card title={"Test title"} buttonLabel={"Button"}/>
        </MemoryRouterProvider>
    );
    expect(getByText(/Test title/i)).toBeInTheDocument();

    const button = getByText('Button');
    act(() => {
        fireEvent.click(button);
    });

  });
});