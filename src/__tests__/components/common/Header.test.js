import Header from '@/components/common/Header';
import useStore from '@/store/store';
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }))

describe('Header', () => {

    it('should show the header text', () => {
        jest.mock('@/store/store', () =>
        jest.fn(() => ({
            userData: 
            { 
            role:'Service Member',
            learner:
                {personnel:
                {person:
                    { name: 'Test user' } 
                }
                }
            },
            setUserData: jest.fn(),
            removeUserData: jest.fn()
            }))
        );

        const { getByText } = render( <MemoryRouterProvider>
            <Header />
            </MemoryRouterProvider>);

        expect(getByText('Sign Up')).toBeInTheDocument();

        const button = getByText('Sign Up');
        act(() => {
            fireEvent.click(button);
        });
    });

    it('should show the header text', () => {
        jest.mock('@/store/store', () =>
        jest.fn(() => ({
            userData: 
            { 
            role:'Program Administrator',
            learner:
                {personnel:
                {person:
                    { name: 'Test user' } 
                }
                }
            },
            setUserData: jest.fn(),
            removeUserData: jest.fn()
            }))
        );
        
        const { getByText } = render( <MemoryRouterProvider>
            <Header />
            </MemoryRouterProvider>);

        expect(getByText('Sign Up')).toBeInTheDocument();

        const button = getByText('Sign Up');
        act(() => {
            fireEvent.click(button);
        });
    });

});