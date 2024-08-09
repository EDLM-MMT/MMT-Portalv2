import React from 'react';
import { act, render, fireEvent } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import CounselingTable from '@/components/tables/CounselingTable';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe('Counseling Table component', () => {
  const course_plan = [
    {
        "course_number": "MAC1105",
        "course_name": "Intro to Algebra",
        "credit_hours": 3,
        "projected_semester": "Fall 2022",
        "status": "Approved"
    },
    {
        "course_number": "COP1000",
        "course_name": "Intro to Programming",
        "credit_hours": 3,
        "projected_semester": "Spring 2023",
        "status": "Approved"
    },
    {
        "course_number": "  SOC 1101",
        "course_name": "Sociology",
        "credit_hours": 3,
        "projected_semester": "Summer 2023",
        "status": "Pending Approval"
    }
  ]

  const one_course_plan = [
    {
        "course_number": "MAC1105",
        "course_name": "Intro to Algebra",
        "credit_hours": 3,
        "projected_semester": "Fall 2022",
        "status": "Approved"
    }
  ]

  it('renders the component with the correct number of rows and columns', () => {
    const { getByText, getByTestId, container } = render(
      <MemoryRouterProvider url='/'>
        <CounselingTable coursePlan={course_plan} />
      </MemoryRouterProvider>
    );
    
    expect(getByText('MAC1105')).toBeInTheDocument();
    expect(getByText('Intro to Algebra')).toBeInTheDocument();
    expect(getByText('Fall 2022')).toBeInTheDocument();
    expect(getByTestId('test-MAC1105')).toBeInTheDocument();

    const button = getByTestId('test-MAC1105');
    act(() => {
        fireEvent.click(button);
    });
  });

  it('clicks delete', () => {
    const { getByTestId } = render(
      <MemoryRouterProvider url='/'>
        <CounselingTable coursePlan={one_course_plan} />
      </MemoryRouterProvider>
    );

    expect(getByTestId('delete-button')).toBeInTheDocument();
    const deleteButton = getByTestId('delete-button');
      act(() => {
        fireEvent.click(deleteButton);
      });
  });
});
