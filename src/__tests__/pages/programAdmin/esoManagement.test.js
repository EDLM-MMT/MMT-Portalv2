import ESOManagement from "@/pages/programAdmin/esoManagement/index";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe("ESO Management Dashbaord page", () => {
  it("should render the page", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <ESOManagement />
        </MemoryRouterProvider>
    );
    expect(getByText('ESO Management')).toBeInTheDocument();
  });

  it("should fill the form fields", () => {
    const { getByPlaceholderText } = render(
      <MemoryRouterProvider>
          <ESOManagement />
      </MemoryRouterProvider>
  );
    act(() => {
      fireEvent.change(getByPlaceholderText('Search by ESO Name'), {
          target: { value: 'test' },
        });
    });
  });

  it("should render the table", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <ESOManagement />
        </MemoryRouterProvider>
    );
    expect(getByText('ESO Name')).toBeInTheDocument();
    expect(getByText('Permissions')).toBeInTheDocument();
    expect(getByText('Branch')).toBeInTheDocument();
    expect(getByText('Workload (# of Tasks)')).toBeInTheDocument();
    expect(getByText('View Profile')).toBeInTheDocument();
  });

  it("should click the view button", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <ESOManagement />
        </MemoryRouterProvider>
    );

    act(() => {
      fireEvent.change(getByPlaceholderText('Search by ESO Name'), {
          target: { value: 'John' },
        });
    });

    expect(getByText('John Smith')).toBeInTheDocument();

    const viewButton = getByText('View');
    act(() => {
      fireEvent.click(viewButton);
    });

  });

  it('changes sort by to ESO Name', () => {
    const { getByText } = render(
      <MemoryRouterProvider url='/'>
        <ESOManagement />
      </MemoryRouterProvider>
    );

    const btn = getByText('Most Recent');
      act(() => {
        fireEvent.click(btn);
      });
    const btn1 = getByText('Name');
      act(() => {
        fireEvent.click(btn);
      });
  });

  it('changes sort by to Branch', () => {
    const { getByText, getByTestId } = render(
      <MemoryRouterProvider url='/'>
        <ESOManagement />
      </MemoryRouterProvider>
    );

    const btn = getByText('Most Recent');
      act(() => {
        fireEvent.click(btn);
      });
    const btn1 = getByTestId('Branch');
      act(() => {
        fireEvent.click(btn);
      });
  });

});