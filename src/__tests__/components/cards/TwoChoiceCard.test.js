import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from "react";
import TwoChoiceCard from '../../../components/cards/TwoChoiceCard';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe('TwoChoiceCard', () => {
  it('renders title and description', () => {
    const card = {
      title: 'Test Title',
      description: 'Test Description',
      secondRoutePath:"/"
    };

    const { getByText } = render(
    <MemoryRouterProvider> 
      <TwoChoiceCard card={card} firstRoutePath={"/"} />
    </MemoryRouterProvider>);

    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
  });

  it('opens Inquiry modal on button click', () => {
    const card = {
      title: 'Test Title',
      description: 'Test Description',
      status: 'Assign Inquiry',
      secondRoutePath:"/"
    };

    const { getByText, queryByText } = render(
    <MemoryRouterProvider>
      <TwoChoiceCard card={card} firstRoutePath={"/"} viewRoutePath={"/"} buttonLabel={"Assign Inquiry"} type={"I"}/>
    </MemoryRouterProvider>);
    expect(queryByText('Please confirm you want to Test Status')).toBeNull();

    const button = getByText('Assign Inquiry');
    act(() => {
        fireEvent.click(button);
    }); 
  });

  it('ESO Inquiry', () => {
    const card = {
      title: 'Test Title',
      description: 'Test Description',
      status: 'Assign Inquiry',
      secondRoutePath:"/"
    };

    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;

    render(
    <MemoryRouterProvider>
      <TwoChoiceCard card={card} firstRoutePath={"/"} viewRoutePath={"/"} buttonLabel={"Open Degree Agreement"} type={"ESO"}/>
    </MemoryRouterProvider>);

  });

  it('opens DA on button click', () => {
    const card = {
      title: 'Test Title',
      description: 'Test Description',
      status: 'Close Degree Agreement',
      secondRoutePath:"/"
    };

    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;

    const data = {
      "degreeAgreements": [
      {
        "id": 101,
        "title": "Management Course",
        "description": "Management 101 Course, intro to mangement including logistics and operational procedures. ",
        "status": "Close Degree Agreement",
        "inquiry_status": "Open",
        "secondRoutePath": "degreeAgreements/101",
        "approvedBy": "John Doe (ESO)",
        "assignedESO": "Mary Jane",
        "degreeStartDate": "Jan 2019",
        "totalCreditHours": "60",
        "completedCreditHours": "6",
        "projectedGradDate": "Jun 2023",
        "degAgr_status": "Open"
      },
      ]
    }
    
    const { getByText } = render(
    <MemoryRouterProvider>
      <TwoChoiceCard card={card} firstRoutePath={"/"} viewRoutePath={"/"} buttonLabel={"Close Degree Agreement"} toggleModalUpdate={()=>{}} 
        data={data} degreeIndex={0}/>
    </MemoryRouterProvider>);

    const button = getByText('Close Degree Agreement');
    act(() => {
        fireEvent.click(button);
    });
  });
});
