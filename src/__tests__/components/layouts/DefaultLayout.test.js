import { render, screen } from '@testing-library/react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

const renderer = () => {
  return render(
    <MemoryRouterProvider url='/dashboard'>
      <DefaultLayout>test child</DefaultLayout>
      </MemoryRouterProvider>

  );
};

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe('Default Layout', () => {
  it('should show the header & footer component', () => {
    renderer();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();

    expect(screen.getByText('DOD Home Page')).toBeInTheDocument();
    expect(screen.getByText('About ADL')).toBeInTheDocument();
    expect(screen.getByText('Web Policy')).toBeInTheDocument();

    expect(screen.getByText('Privacy')).toBeInTheDocument();
    expect(screen.getByText('Contact US')).toBeInTheDocument();
  });

  it('should show the child components', () => {
    renderer();
    expect(screen.getByText('test child')).toBeInTheDocument();
  });
});
