import { act, fireEvent, render } from "@testing-library/react";
import TranscriptCard from "@/components/cards/TranscriptCard";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe("TranscriptCard Component", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <TranscriptCard title={"Test title"} type={"complete"}/>
        </MemoryRouterProvider>
    );
    expect(getByText(/Test title/i)).toBeInTheDocument();
    expect(getByText(/Official Transcript/i)).toBeInTheDocument();
    expect(getByText(/Return to My Transcripts Page/i)).toBeInTheDocument();

    const button = getByText('My Transcripts');
    act(() => {
        fireEvent.click(button);
    });

  });
});