import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { fireEvent, render } from "@testing-library/react";
import { act } from "react";
import Alert from '@/components/overlays/Alert';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }))
  

describe("Alert Component", () => {
    
    it("should render the component", () => {
        const { getByText } = render(
            <MemoryRouterProvider>
                <Alert toggleModal={()=>{}}/>
            </MemoryRouterProvider> );
            
        expect(getByText("Alert")).toBeInTheDocument();
        expect(getByText("Close")).toBeInTheDocument();

        const button = getByText('Close');
        act(() => {
            fireEvent.click(button);
        });
    });
});
