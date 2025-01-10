import { QueryClientWrapper } from '@/__mocks__/queryClientMock';
import { render, fireEvent } from '@testing-library/react';
import Panel from '@/components/Panel';

const renderer = () => {
    return render(
      <QueryClientWrapper>
        <Panel title={"Panel Title"} description={"Panel desc"} buttonLabel="Button" children={<div>Test content</div>} image={"test.png"} route={"/"} icon={<>icon</>}/>
      </QueryClientWrapper>
    );
};

describe ('Panel component test', () => {
    it ('show that a panel can render', () =>{
        const screen = renderer();
        expect(screen.getByText('Panel Title'));
        expect(screen.getByText('Panel desc'));
        expect(screen.getByText('Test content'));

        fireEvent.click(screen.getByTestId('button'));
        

    })  
})