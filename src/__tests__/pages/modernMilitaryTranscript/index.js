'use strict';

import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import { fireEvent, render } from '@testing-library/react';
import { useAuthenticatedUser, useMockConfig } from '@/__mocks__/predefinedMocks';
import ModernMilitaryTranscript from '@/pages/modernMilitaryTranscript/index';

const queryClient = new QueryClient();
const renderer = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <ModernMilitaryTranscript />
    </QueryClientProvider>
  );
};

describe('ModernMilitaryTranscript Page', () => {
  it('should render the page', () => {
    useAuthenticatedUser();
    const { getByText } = renderer();
    expect(getByText('Transcript')).toBeInTheDocument();
    expect(getByText('Format')).toBeInTheDocument();
    expect(getByText('Modernized')).toBeInTheDocument();
    expect(getByText('Help')).toBeInTheDocument();

    fireEvent.click(getByText('Share Official Transcript'))
    expect(getByText('Share Transcript')).toBeInTheDocument();
    fireEvent.click(getByText('Share'))
    expect(getByText('Your transcript(s) have been successfully delivered!')).toBeInTheDocument();
    fireEvent.click(getByText('Close'))

  });
});
