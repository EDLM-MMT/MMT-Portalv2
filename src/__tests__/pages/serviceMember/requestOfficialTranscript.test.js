import RequestOfficialTranscript from "@/pages/serviceMember/requestOfficialTranscript";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe("Request Transcript Component", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <RequestOfficialTranscript />
        </MemoryRouterProvider>
    );

    expect(getByText('Official Transcript')).toBeInTheDocument();
    expect(getByText('My Transcripts')).toBeInTheDocument();
    expect(getByText('Enter Academic Institute')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
    expect(getByText('Send Transcript')).toBeInTheDocument();

    const button = getByText('My Transcripts');
    act(() => {
        fireEvent.click(button);
    });

  });
});
