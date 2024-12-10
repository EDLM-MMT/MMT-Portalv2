import React from 'react';
import { act, render, fireEvent } from '@testing-library/react';
import ESOCommentsTable from '@/components/tables/ESOCommentsTable';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('ESOCommentsTable component', () => {
  const comments = [
    {
        "date": "02/14/2023",
        "purpose": "Approved",
        "comment": "Approved added elective courses"

    },
    {
        "date": "02/12/2023",
        "purpose": "Advised",
        "comment": "Advised to add all courses including electives in the table. Waiting for update"
    }
  ]


  it('renders the component with the correct number of rows and columns', () => {
    const { getByText } = render(
        <MemoryRouterProvider url='/'>
        <ESOCommentsTable ESOComments={comments} />
        </MemoryRouterProvider>
    );

    expect(getByText('Date')).toBeInTheDocument();
    expect(getByText('Purpose')).toBeInTheDocument();
    expect(getByText('Comments')).toBeInTheDocument();
  });

  
});
