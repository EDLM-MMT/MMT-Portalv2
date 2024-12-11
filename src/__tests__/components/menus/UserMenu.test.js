import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { act, fireEvent, render } from "@testing-library/react";
import UserMenu from '@/components/menus/UserMenu';


global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }))
  

describe("User Menu Component", () => {

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
            <MemoryRouterProvider url='/'>
                <UserMenu/>
            </MemoryRouterProvider> );

        expect(getByTestId('user-menu-button')).toBeInTheDocument();
        
        const button = getByTestId('user-menu-button');
        act(() => {
            fireEvent.click(button);
        });
        
        expect(getByText('Profile')).toBeInTheDocument();
        const button2 = getByText('Profile');
        act(() => {
            fireEvent.click(button2);
        });
    });
    
});
