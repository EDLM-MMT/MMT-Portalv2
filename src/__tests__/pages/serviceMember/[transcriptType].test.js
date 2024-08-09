import TranscriptView from "@/pages/serviceMember/transcripts/[transcriptType]";
import { render } from "@testing-library/react";
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
            <TranscriptView transcriptType = "Basic"/>
        </MemoryRouterProvider>
    );

    expect(getByText('Basic Transcript')).toBeInTheDocument();
    expect(getByText('Official Transcript')).toBeInTheDocument();
    expect(getByText('PDF Viewer')).toBeInTheDocument();
    expect(getByText('Return to My Transcripts Page')).toBeInTheDocument();
    expect(getByText('Download')).toBeInTheDocument();
  });

  it("should render the Summary Transcript", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <TranscriptView transcriptType = "Summary"/>
        </MemoryRouterProvider>
    );

    expect(getByText('Summary Transcript')).toBeInTheDocument();
  });

  it("should render the Academic Transcript", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <TranscriptView transcriptType = "Academic"/>
        </MemoryRouterProvider>
    );

    expect(getByText('Academic Transcript')).toBeInTheDocument();
  });

  it("should render the Complete Transcript", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <TranscriptView transcriptType = "Complete"/>
        </MemoryRouterProvider>
    );

    expect(getByText('Complete Transcript')).toBeInTheDocument();
  });

});
