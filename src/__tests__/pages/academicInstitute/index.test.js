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
  it('should render the button', () => {
    useAuthenticatedUser();
    const { getByText } = renderer();
    
    expect(getByText('Request Military Transcript')).toBeInTheDocument();
  });

//   it('should open a modal for creating a saved search when the button is clicked', () => {
//     useAuthenticatedUser();
//     useMockCreateSaveSearch();
//     const { getByText, getByPlaceholderText } = renderer();
//     act(() => {
//       fireEvent.click(getByText('Request Military Transcript'));
//     });
//     expect(getByPlaceholderText('Query Name')).toBeInTheDocument();
//     expect(getByText('Request Military Transcript')).toBeInTheDocument();
//   });

//   it('should call the api when save is clicked', () => {
//     useAuthenticatedUser();
//     useMockCreateSaveSearch();
//     const { getByText, getByPlaceholderText } = renderer();
//     act(() => {2
//       fireEvent.click(getByText('Request Military Transcript'));
//     });
//     act(() => {
//       fireEvent.change(getByPlaceholderText('Query Name'), {
//         target: { value: 'test' },
//       });
//     });
//     act(() => {
//       fireEvent.click(getByText('Request Military Transcript'));
//     });
//     expect(createSaveSearchMockFn).toHaveBeenCalled();
//   });

//   it('should call the api when save is clicked and block special chars', () => {
//     useAuthenticatedUser();
//     useMockCreateSaveSearch();
//     const { getByText, getByPlaceholderText } = renderer();
//     act(() => {2
//       fireEvent.click(getByText('Request Military Transcript'));
//     });
//     act(() => {
//       fireEvent.keyPress(getByPlaceholderText('Query Name'), {
//         key: ";", code: 186, charCode: 186 
//       });
//     });
//     act(() => {
//       fireEvent.keyPress(getByPlaceholderText('Query Name'), {
//         key: "1", code: 49, charCode: 49
//       });
//     });
//     act(() => {
//       fireEvent.change(getByPlaceholderText('Query Name'), {
//         target: { value: 'test' },
//       });
//     });
//     act(() => {
//       fireEvent.click(getByText('Request Military Transcript'));
//     });
//     expect(createSaveSearchMockFn).toHaveBeenCalled();
//   });

//   it('should not call the api when there is no query to save', () => {
//     useAuthenticatedUser();
//     useMockCreateSaveSearch();
//     const { getByText, getByPlaceholderText } = renderer();
//     act(() => {
//       fireEvent.click(getByText('Request Military Transcript'));
//     });
//     expect(createSaveSearchMockFn).not.toHaveBeenCalled();
//   });
});

