import DegreePathways from "@/pages/eso/degreePathways";
import Inquiry from "@/pages/serviceMember/inquiries";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }))

describe("Degree Pathways Page", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <DegreePathways />
        </MemoryRouterProvider>
    );

    expect(getByText('Degree Pathways Catalog')).toBeInTheDocument();
    expect(getByText('Sort By:')).toBeInTheDocument();
  });

  it("should check the search bar in the component", () => {
    const { getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <DegreePathways />
        </MemoryRouterProvider>
    );
    expect(getByPlaceholderText('Search for School or Major')).toBeInTheDocument();

    act(() => {
        fireEvent.change(getByPlaceholderText('Search for School or Major'), {
            target: { value: 'BS' },
        });
    });
  });

  it("should check the inner information using the search bar in the component", () => {

    const { getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <DegreePathways />
        </MemoryRouterProvider>
    );

    expect(getByPlaceholderText('Search for School or Major')).toBeInTheDocument();

    act(() => {
        fireEvent.change(getByPlaceholderText('Search for School or Major'), {
            target: { value: 'Business Administration' },
          });
    });

    act(() => {
        fireEvent.change(getByPlaceholderText('Search for School or Major'), {
            target: { value: 'American' },
          });
    });
  });

  it("filter by MOS dropdown click", () => {

    const { getByText } = render(
        <MemoryRouterProvider>
            <DegreePathways />
        </MemoryRouterProvider>
    );
    expect(getByText('All')).toBeInTheDocument();

    act(() => {
        fireEvent.click(getByText('All'));
    });

    act(() => {
        fireEvent.click(getByText('ABE'));
    });
  });

});
