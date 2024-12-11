import Sort from "@/components/Sort";
import { fireEvent, render } from "@testing-library/react";
import { act } from 'react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe("Sort component", () => {
    it("should render the component", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <Sort options={["Most Recent", "Status", "Name", "Role", "Branch"]} data={[]} setModifiedData={()=>{}} />
        </MemoryRouterProvider>
      );

      expect(getByText("Sort By:")).toBeInTheDocument();

      act(() => {
          fireEvent.click(getByText('Most Recent'));
      });
      act(() => {
          fireEvent.click(getByText('Status'));
      });

      act(() => {
        fireEvent.click(getByText('Status'));
      });
      act(() => {
        fireEvent.click(getByText('Name'));
      });

      act(() => {
        fireEvent.click(getByText('Name'));
      });
      act(() => {
        fireEvent.click(getByText('Role'));
      });

      act(() => {
        fireEvent.click(getByText('Role'));
      });
      act(() => {
        fireEvent.click(getByText('Branch'));
      });
    });
});
