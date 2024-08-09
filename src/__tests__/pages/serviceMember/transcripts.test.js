import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Transcripts from "@/pages/serviceMember/transcripts";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe("Transcripts Component", () => {
  jest.mock('next/router', () => ({
    ...jest.requireActual('next/router'),
    useAuthRouter: () => ({

    }),
  }));

  it("should render the component", () => {
    const { getByText, getAllByText } = render(
        <MemoryRouterProvider>
            <Transcripts />
        </MemoryRouterProvider>
    );
    expect(getByText('My Transcripts')).toBeInTheDocument();
    expect(getByText('Official Transcript')).toBeInTheDocument();
    expect(getByText('Basic Transcript')).toBeInTheDocument();
    expect(getByText('Summary Transcript')).toBeInTheDocument();
    expect(getByText('Academic Transcript')).toBeInTheDocument();
    expect(getByText('Complete Transcript')).toBeInTheDocument();
    expect(getAllByText('View').length).toBe(4);
    expect(getAllByText('Download').length).toBe(4);

  });
});
