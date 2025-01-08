'use strict';

import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import { fireEvent, render } from '@testing-library/react';
import { useAuthenticatedUser, useMockConfig } from '@/__mocks__/predefinedMocks';
import Home from '@/pages/index';

const queryClient = new QueryClient();
const renderer = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

describe('Home Page', () => {
  it('should render the page', () => {
    useAuthenticatedUser();
    const { getByText } = renderer();
    expect(getByText('MMT')).toBeInTheDocument();
    expect(getByText('Overview')).toBeInTheDocument();
    expect(getByText('Modernized Military Transcript')).toBeInTheDocument();
    expect(getByText('Help')).toBeInTheDocument();
    expect(getByText('Welcome, E-5, Julio Gomez!')).toBeInTheDocument();

    fireEvent.click(getByText('Learn More'))


  });
});
