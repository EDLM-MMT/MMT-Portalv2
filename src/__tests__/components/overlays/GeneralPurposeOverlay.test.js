import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { fireEvent, render } from "@testing-library/react";
import { act } from "react";
import GeneralPurposeOverlay from '@/components/overlays/GeneralPurposeOverlay';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }))

describe("GeneralPurposeOverlay Component", () => {

    jest.fn(() => ({
        userData: 
        { 
        role:'Service Member',
        learner:
            {personnel:
                {person:
                    { firstName: 'Test user' } 
                }
            }
        },
        setUserData: jest.fn(),
        removeUserData: jest.fn()
    }));
    
    it("should render the component", () => {
        const { getByText } = render(
            <MemoryRouterProvider>
                <GeneralPurposeOverlay toggleModal={()=>{}} toggle2ndModal={()=>{console.log("test")}} 
                    title={"Reset Password Confirmation"}
                    message={"Please confirm you want to test"} path={"/"}/>
            </MemoryRouterProvider> );
            
            
        expect(getByText("Reset Password Confirmation")).toBeInTheDocument();
        expect(getByText("Confirm")).toBeInTheDocument();
        expect(getByText("Cancel")).toBeInTheDocument();

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
                <GeneralPurposeOverlay toggleModal={()=>{}} disable={()=>{}}
                    title={"Reset Password Confirmation"}
                    message={"Please confirm you want to test"} path={"/"}/>
            </MemoryRouterProvider> );
            
        expect(getByText("Cancel")).toBeInTheDocument();

        const button2 = getByText('Cancel');
        act(() => {
            fireEvent.click(button2);
        });
    });
});
