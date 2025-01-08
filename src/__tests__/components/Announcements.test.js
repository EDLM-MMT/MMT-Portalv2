import { QueryClientWrapper } from '@/__mocks__/queryClientMock';
import { fireEvent, getByLabelText, getByRole, getByTestId, render } from '@testing-library/react';
import Button from '@/components/Button';
import Announcements from '@/components/Announcements';
import announcementsData from '@/__mocks__/data/announcements.data';

const renderer = () => {
    return render(
      <QueryClientWrapper>
        <Announcements content={announcementsData} />
      </QueryClientWrapper>
    );
};

describe ('Button component test', () => {

    it ('show that a button can render', () =>{
        const screen = renderer();
        expect(screen.findByText('Notifications'))
    })
    
    it ('shows that x button in notification can be clicked', () =>{
        // const { getByTestId } = render(
        //     <HeaderCreate closeRightSection={closeRightSectionSpy} />
        //   );
        const testMock = jest.fn();

        const screen = renderer();
        fireEvent.click(screen.getByTestId('testId'))
        expect(testMock).toHaveBeenCalledTimes(0);

    })
})