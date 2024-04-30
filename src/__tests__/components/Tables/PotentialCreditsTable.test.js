import React from 'react';
import { act, render, fireEvent } from '@testing-library/react';
import PotentialCreditsTable from '@/components/Tables/PotentialCreditsTable';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('PotentialCreditsTable component', () => {
  const credits = [
    {
        "courseNumber": "APS 401 OL",
        "courseName": "Current Trends & Applications",
        "hours": "3S",
        "level":"U",
        "institution": "Thomas Edison State University",
        "dateTaken": "29-JAN-2018"
    },
    {
        "courseNumber": "CHE128",
        "courseName": "General Chemistry I Lab",
        "hours": "1S",
        "level":"L",
        "institution": "Thomas Edison State University",
        "dateTaken": "03-JUL-2017"
    }
  ]

  it('renders the component with the correct number of rows and columns', () => {
  const { getByText } = render(
    <MemoryRouterProvider url='/'>
      <PotentialCreditsTable credits={credits} />
    </MemoryRouterProvider>
  );

  expect(getByText('Course Number')).toBeInTheDocument();
  expect(getByText('Course Name')).toBeInTheDocument();
  expect(getByText('Hours')).toBeInTheDocument();
  expect(getByText('Level')).toBeInTheDocument();
  expect(getByText('Institution')).toBeInTheDocument();

  expect(getByText('Current Trends & Applications')).toBeInTheDocument();
  expect(getByText('General Chemistry I Lab')).toBeInTheDocument();
  });

});
