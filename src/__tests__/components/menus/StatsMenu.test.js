import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { act, fireEvent, render } from "@testing-library/react";
import StatsMenu from '@/components/menus/StatsMenu';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }))
  

describe("Stats Menu Component", () => {

    jest.mock('@/store/store', () =>
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
        }))
    );

    it("should render the component", () => {
        const { getByText, getByTestId } = render(
            <MemoryRouterProvider url='/' >
                <StatsMenu />
            </MemoryRouterProvider> );

        expect(getByText('Enrollment Statistics')).toBeInTheDocument();
        
        const button = getByText('Enrollment Statistics');
        act(() => {
            fireEvent.click(button);
        });
        
        expect(getByText('Enrollment by University')).toBeInTheDocument();
        const button2 = getByText('Enrollment by University');
        act(() => {
            fireEvent.click(button2);
        });
    });
    
});
