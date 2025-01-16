'use strict';

import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import { render } from '@testing-library/react';
import { useAuthenticatedUser, useMockConfig } from '@/__mocks__/predefinedMocks';
import Docs from '@/pages/academicInstitute/help';

const queryClient = new QueryClient();
const renderer = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <Docs />
    </QueryClientProvider>
  );
};

describe('Help Page inside Academic Institute', () => {
  it('should render the page', () => {
    useAuthenticatedUser();
    const { getByText } = renderer();
    expect(getByText('Help Center')).toBeInTheDocument();

  });
});
