import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Table from '@/components/tables/Table';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe('Table component', () => {
  const rowsData = [
    ['User 1', '2022-01-01', 'View', 'Reset'],
  ];
  const columnTitles = ['Username', 'Last Login', '', ''];

  it('renders the component with the correct number of rows and columns', () => {
    const { getByText, container } = render(
      <MemoryRouterProvider url='/'>
        <Table rowsData={rowsData} columnTitles={columnTitles} />
      </MemoryRouterProvider>
    );
    const table = container.querySelector('table');
    const tableHead = table.querySelector('thead');
    const tableBody = table.querySelector('tbody');

    expect(table).toBeInTheDocument();
    expect(tableHead.childNodes.length).toBe(1);
    expect(tableHead.childNodes[0].childNodes.length).toBe(
      columnTitles.length
    );
    expect(tableBody.childNodes.length).toBe(rowsData.length);
    expect(tableBody.childNodes[0].childNodes.length).toBe(
      columnTitles.length
    );
    rowsData.forEach((row) => {
      row.forEach((data) => {
        expect(getByText(data)).toBeInTheDocument();
      });
    });
  });

  it('renders the "No data found" message when there is no data', () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <Table rowsData={[]} columnTitles={[]} />
      </MemoryRouterProvider> );
    expect(getByText('No data found')).toBeInTheDocument();
  });

  it('calls the handleView function when the "View" button is clicked', () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <Table rowsData={rowsData} columnTitles={columnTitles} />
      </MemoryRouterProvider>

    );
    const viewButton = getByText('View');
    fireEvent.click(viewButton);

  });

  it('calls the handleView function when the "Reset" button is clicked', () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <Table rowsData={rowsData} columnTitles={columnTitles} />
      </MemoryRouterProvider>

    );
    const viewButton = getByText('Reset');
    fireEvent.click(viewButton);

  });

  it('calls the handleView function when the "Go to Counseling" button is clicked', () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <Table rowsData={[["Go To Counseling"]]} columnTitles={columnTitles} />
      </MemoryRouterProvider>

    );
    const viewButton = getByText('Go To Counseling');
    fireEvent.click(viewButton);

  });

  it('calls the handleView function when the "Delete" button is clicked', () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <Table rowsData={[["Delete"]]} columnTitles={columnTitles} />
      </MemoryRouterProvider>

    );
    const viewButton = getByText('Delete');
    fireEvent.click(viewButton);

  });


});
