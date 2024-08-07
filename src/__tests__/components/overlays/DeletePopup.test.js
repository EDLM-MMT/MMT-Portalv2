import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { act, fireEvent, render } from "@testing-library/react";
import DeletePopup from '@/components/overlays/DeletePopup';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }))

describe("DeletePopup Component", () => {
  
    it("should render the component", () => {
        const { getByText } = render(
            <MemoryRouterProvider>
                <DeletePopup toggleModal={()=>{}}
                    message={""} path={"/"}/>
            </MemoryRouterProvider> );
            
            
        expect(getByText("Cancel")).toBeInTheDocument();
        expect(getByText("Confirm")).toBeInTheDocument();

        const button = getByText('Confirm');
        act(() => {
            fireEvent.click(button);
        });

    });

    it("Button click component", () => {
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
        
        const { getByText } = render(
            <MemoryRouterProvider>
                <DeletePopup toggleModal={()=>{}}
                    message={""} path={"/"}/>
            </MemoryRouterProvider> );
            
        expect(getByText("Cancel")).toBeInTheDocument();

        const button2 = getByText('Cancel');
        act(() => {
            fireEvent.click(button2);
        });
    });
});
