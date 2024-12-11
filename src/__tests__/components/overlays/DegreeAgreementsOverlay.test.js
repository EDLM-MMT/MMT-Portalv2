import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { fireEvent, render } from "@testing-library/react";
import { act } from "react";
import DegreeAgreementsOverlay from '@/components/overlays/DegreeAgreementsOverlay';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }))

describe("DegreeAgreementsOverlay Component", () => {

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
                <DegreeAgreementsOverlay toggleModal={()=>{}} title={"test title"} toggleModalUpdate={()=>{}}
                    data={{"degreeAgreements": ["test"]}}
                    message={"Please confirm you want to test"} btnText={"Yes, test"} card={{status:"Close Degree Agreement"}}
                    degreeIndex={0}/>
            </MemoryRouterProvider> );
            
        expect(getByText("test title")).toBeInTheDocument();
        expect(getByText("Yes, test")).toBeInTheDocument();
        expect(getByText("Cancel")).toBeInTheDocument();

        const button = getByText('Cancel');
        act(() => {
            fireEvent.click(button);
        });

    });

    it("should click yes button", () => {
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;

        const { getByText } = render(
            <MemoryRouterProvider>
                <DegreeAgreementsOverlay toggleModal={()=>{}} title={"test title"} toggleModalUpdate={()=>{}}
                    data={{"degreeAgreements": ["test"]}}
                    message={"Please confirm you want to test"} btnText={"Yes, test"} card={{status:"Close Degree Agreement"}}
                    degreeIndex={0}/>
            </MemoryRouterProvider> );
            
        expect(getByText("Yes, test")).toBeInTheDocument();

        const button2 = getByText('Yes, test');
        act(() => {
            fireEvent.click(button2);
        });
    });

    it("should be a reopen degree agreement status ", () => {
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;

        const { getByText } = render(
            <MemoryRouterProvider>
                <DegreeAgreementsOverlay toggleModal={()=>{}} title={"test title"} toggleModalUpdate={()=>{}}
                    data={{"degreeAgreements": ["test"]}}
                    message={"Please confirm you want to test"} btnText={"Yes, test"} card={{status:"Reopen Degree Agreement"}}
                    degreeIndex={0}/>
            </MemoryRouterProvider> );
            
        expect(getByText("Yes, test")).toBeInTheDocument();

        const button2 = getByText('Yes, test');
        act(() => {
            fireEvent.click(button2);
        });
    });

    it("should be a reopen inquiry status ", () => {
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;

        const { getByText } = render(
            <MemoryRouterProvider>
                <DegreeAgreementsOverlay toggleModal={()=>{}} title={"test title"} toggleModalUpdate={()=>{}}
                    data={{"degreeAgreements": ["test"]}}
                    message={"Please confirm you want to test"} btnText={"Yes, test"} card={{status:"Reopen Inquiry"}}
                    degreeIndex={0}/>
            </MemoryRouterProvider> );
            
        expect(getByText("Yes, test")).toBeInTheDocument();

        const button2 = getByText('Yes, test');
        act(() => {
            fireEvent.click(button2);
        });
    });

    it("should be a close inquiry status ", () => {
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;

        const { getByText } = render(
            <MemoryRouterProvider>
                <DegreeAgreementsOverlay toggleModal={()=>{}} title={"test title"} toggleModalUpdate={()=>{}}
                    data={{"degreeAgreements": ["test"]}}
                    message={"Please confirm you want to test"} btnText={"Yes, test"} card={{status:"Close Inquiry"}}
                    degreeIndex={0}/>
            </MemoryRouterProvider> );
            
        expect(getByText("Yes, test")).toBeInTheDocument();

        const button2 = getByText('Yes, test');
        act(() => {
            fireEvent.click(button2);
        });
    });
    
});
