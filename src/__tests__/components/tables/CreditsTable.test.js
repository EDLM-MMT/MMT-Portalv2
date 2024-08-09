import React from 'react';
import { act, render, fireEvent } from '@testing-library/react';
import CreditsTable from '@/components/tables/CreditsTable';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe('CreditsTable component', () => {
  const credits = [
    {
        "courseNumber": "ENG 101",
        "courseName": "English Composition I",
        "coursesCatagory": "Foundations Studies",
        "reqHours": "3",
        "potentialCredit": "Transfer (3)",
        "hoursNeeded": "0"
    },
    {
        "courseNumber": "ENG 101",
        "courseName": "English Composition II",
        "coursesCatagory": "Foundations Studies",
        "reqHours": "3",
        "potentialCredit": "Transfer (3)",
        "hoursNeeded": "0"
    }
  ]

  it('renders the component with the correct number of rows and columns', () => {
  const { getByText } = render(
    <MemoryRouterProvider url='/'>
      <CreditsTable credits={credits} />
    </MemoryRouterProvider>
  );

  expect(getByText('Course Number')).toBeInTheDocument();
  expect(getByText('Course Name')).toBeInTheDocument();
  expect(getByText('Course Category')).toBeInTheDocument();
  expect(getByText('Required Hours')).toBeInTheDocument();
  expect(getByText('Potential Cedit (Hours)')).toBeInTheDocument();
  expect(getByText('Hours Still Needed')).toBeInTheDocument();

  expect(getByText('English Composition I')).toBeInTheDocument();
  expect(getByText('English Composition II')).toBeInTheDocument();
  });

});
