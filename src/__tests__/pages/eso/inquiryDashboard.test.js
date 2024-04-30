import React from 'react';
import { act, render, fireEvent } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import ESOInquiryDashboard from '@/pages/eso/inquiries';

describe('ESO Inquiry Dashboard component', () => {

  it('renders the component with the correct number of elements', () => {
    const { getByText, } = render(
      <MemoryRouterProvider >
        <ESOInquiryDashboard />
      </MemoryRouterProvider>
    );
    
    expect(getByText('ESO Inquiries')).toBeInTheDocument();
    expect(getByText('Sort By:')).toBeInTheDocument();
    expect(getByText('Most Recent')).toBeInTheDocument();

    

    let button2 = getByText('Most Recent');
    act(() => {
        fireEvent.click(button2);
    });

    let button = getByText('Status');
    act(() => {
        fireEvent.click(button);
    });

    button2 = getByText('Status');
    act(() => {
        fireEvent.click(button2);
    });

    act(() => {
        fireEvent.click(getByText('Most Recent'));
    });
  });

  it("should check the search bar in the component", () => {
    const { getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <ESOInquiryDashboard />
        </MemoryRouterProvider>
    );
    expect(getByPlaceholderText('Search by Service Member Name')).toBeInTheDocument();
    
    act(() => {
      fireEvent.change(getByPlaceholderText('Search by Service Member Name'), {
          target: { value: '' },
      });
    });

    act(() => {
        fireEvent.change(getByPlaceholderText('Search by Service Member Name'), {
            target: { value: 'Bill Phillips' },
        });
    });

    act(() => {
        fireEvent.change(getByPlaceholderText('Search by Service Member Name'), {
            target: { value: 'Zack Blanchard' },
        });
    });
  });

});
