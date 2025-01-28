'use strict';

import { QueryClientWrapper } from '@/__mocks__/queryClientMock';
import { act } from '@testing-library/react';
import {
  createSaveSearchMockFn,
  useAuthenticatedUser,
  useMockCreateSaveSearch,
  useUnauthenticatedUser,
} from '@/__mocks__/predefinedMocks';
import { fireEvent, render } from '@testing-library/react';
import ModernMilitaryTranscriptAIPage from '@/pages/academicInstitute';

const renderer = () => {
  return render(
    <QueryClientWrapper>
      <ModernMilitaryTranscriptAIPage />
    </QueryClientWrapper>
  );
};

afterEach(() => {
  jest.resetAllMocks();
});

describe('Request Military Transcript AI Page', () => {
  it('should render the page', () => {
      useAuthenticatedUser();
      const { getByText, getByPlaceholderText, getByTestId } = renderer();
      
      expect(getByText('Welcome Emma Hobert!')).toBeInTheDocument();

      fireEvent.click(getByText('Search'));

      expect(getByText('Search')).toBeInTheDocument();
      fireEvent.change(getByPlaceholderText('Search'), {
        target: { value: 'John' },
      });
      fireEvent.click(getByText('Search'));

      fireEvent.click(getByText('Request Military Transcript'))

      expect(getByPlaceholderText('First Name')).toBeInTheDocument();
      fireEvent.change(getByPlaceholderText('First Name'), {
        target: { value: 'John' },
      });
      fireEvent.change(getByPlaceholderText('Last Name'), {
        target: { value: 'Doe' },
      });
      fireEvent.change(getByPlaceholderText("MM/DD/YYYY"), {
        target: { value: '01/01/1990' },
      });
      fireEvent.change(getByPlaceholderText('####'), {
        target: { value: '1111' },
      });

      fireEvent.click(getByTestId('requestTranscriptButton'))
      expect(getByText('Your transcript request have been successfully delivered!')).toBeInTheDocument();
      
  });
});