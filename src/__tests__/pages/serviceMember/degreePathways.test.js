import DegreePathways from "@/pages/serviceMember/degreePathways";
import { fireEvent, render } from "@testing-library/react";
import { act } from 'react';
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
    expect(getByText('School')).toBeInTheDocument();
    expect(getByText('City University')).toBeInTheDocument();
    expect(getByText('Emory Riddle')).toBeInTheDocument();

    let button = getByText('City University');
    act(() => {
        fireEvent.click(button);
    });
    
    let button2 = getByText('School');
    act(() => {
        fireEvent.click(button2);
    });

    button = getByText('Major');
    act(() => {
        fireEvent.click(button);
    });

    button2 = getByText('Major');
    act(() => {
        fireEvent.click(button2);
    });

    act(() => {
        fireEvent.click(getByText('School'));
    });

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
            target: { value: 'City University' },
        });
    });

    act(() => {
        fireEvent.change(getByPlaceholderText('Search for School or Major'), {
            target: { value: 'BS' },
        });
    });
  });

  it("should check the inner information using the search bar in the component", () => {

    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <DegreePathways />
        </MemoryRouterProvider>
    );
    
    act(() => {
        fireEvent.click(getByText('School'));
    });

    act(() => {
        fireEvent.click(getByText('Major'));
    });

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
