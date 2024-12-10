import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { render } from "@testing-library/react";
import Dashboard from "@/pages/dashboard";

describe("Dashboard Component", () => {
    
    it("should render the component", () => {
        const { getByText } = render(
            <MemoryRouterProvider>
                <Dashboard />
            </MemoryRouterProvider> );
            
        expect(getByText("Sign Up")).toBeInTheDocument();
        expect(getByText(/DOD Home Page/i)).toBeInTheDocument();
        expect(getByText(/About ADL/i)).toBeInTheDocument();
        expect(getByText(/Web Policy/i)).toBeInTheDocument();
        expect(getByText(/Privacy/i)).toBeInTheDocument();
        expect(getByText(/Contact Us/i)).toBeInTheDocument();
    });
});
