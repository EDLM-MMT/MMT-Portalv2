import React from 'react';
import { act, render, fireEvent } from '@testing-library/react';
import CounselingDashboardTable from '@/components/tables/CounselingDashboardTable';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('CounselingDashboardTable component', () => {
  const counseling = [
    {
      "id": 300,
      "degree": "Computer Science",
      "school": "Berkeley College - Online (NJ)",
      "degree_startDate": "January 2019",
      "projected_graduation": "June 2023",
      "assigned_eso": "Mary Jane Doe",
      "total_creditHours": 60,
      "creditHours_completed": 12,
    },
    {
      "id": 301,
      "degree": "Business Administration",
      "school": "University Of Central Florida - Online (FL)",
      "degree_startDate": "January 2019",
      "projected_graduation": "December 2023",
      "assigned_eso": "John Doe",
      "total_creditHours": 60,
      "creditHours_completed": 24,
    }
  ]

  const counselingOne = [
    {
      "id": 300,
      "degree": "Computer Science",
      "school": "Berkeley College - Online (NJ)",
      "degree_startDate": "January 2019",
      "projected_graduation": "June 2023",
      "assigned_eso": "Mary Jane Doe",
      "total_creditHours": 60,
      "creditHours_completed": 12,
    }
  ]
      

  it('renders the component with the correct number of rows and columns', () => {
  const { getByText } = render(
    <MemoryRouterProvider url='/'>
      <CounselingDashboardTable careerList={counseling} />
    </MemoryRouterProvider>
  );

  expect(getByText('Major')).toBeInTheDocument();
  expect(getByText('School')).toBeInTheDocument();
  expect(getByText('Required Hours')).toBeInTheDocument();

  expect(getByText('Computer Science')).toBeInTheDocument();
  expect(getByText('Berkeley College - Online (NJ)')).toBeInTheDocument();
  expect(getByText('Business Administration')).toBeInTheDocument();

  });

  it('renders the component with the correct number of rows and columns', () => {
    const { getByText } = render(
      <MemoryRouterProvider url='/'>
        <CounselingDashboardTable careerList={counseling} />
      </MemoryRouterProvider>
    );
  
    expect(getByText('Major')).toBeInTheDocument();
    expect(getByText('School')).toBeInTheDocument();
    expect(getByText('Required Hours')).toBeInTheDocument();
  
    expect(getByText('Computer Science')).toBeInTheDocument();
    expect(getByText('Berkeley College - Online (NJ)')).toBeInTheDocument();
    expect(getByText('Business Administration')).toBeInTheDocument();
  
    });

  it('clicks counseling button', () => {
    const { getByText } = render(
      <MemoryRouterProvider url='/'>
        <CounselingDashboardTable careerList={counselingOne} />
      </MemoryRouterProvider>
    );
  
    const counselingButton = getByText('Go To Counseling');
      act(() => {
        fireEvent.click(counselingButton);
      });

  });

  it('clicks delete', () => {
    const { getByTestId } = render(
      <MemoryRouterProvider url='/'>
        <CounselingDashboardTable careerList={counselingOne} />
      </MemoryRouterProvider>
    );

    expect(getByTestId('delete-button')).toBeInTheDocument();
    const deleteButton = getByTestId('delete-button');
      act(() => {
        fireEvent.click(deleteButton);
      });
  });

});
