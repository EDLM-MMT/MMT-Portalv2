import TranscriptView from "@/pages/eso/counseling/transcript";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe("Transcript Type View Component", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <TranscriptView />
        </MemoryRouterProvider>
    );

    expect(getByText('Complete Transcript')).toBeInTheDocument();
    expect(getByText('Counseling Dashboard')).toBeInTheDocument();
    expect(getByText('Return to Counseling Dashboard')).toBeInTheDocument();
    expect(getByText('Download')).toBeInTheDocument();

    const button = getByText('Counseling Dashboard');
    act(() => {
        fireEvent.click(button);
    });

  });
});
