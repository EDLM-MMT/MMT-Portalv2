'use strict';

import '@testing-library/jest-dom'; 
import { AdminUsersTable } from '@/components/AdminUsersTable';
import { QueryClientWrapper } from '@/__mocks__/queryClientMock';
import { render, screen } from '@testing-library/react';

const renderer = () => {
  return render(
    <QueryClientWrapper>
      <AdminUsersTable />
    </QueryClientWrapper>
  );
};

describe('Admin Users Table Tests', () => {
    it('Tests that the table renders', () => {
        const screen = renderer()
        expect(screen.getByText('First Name')).toBeInTheDocument();
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('linh.tran@mmt.edu')).toBeInTheDocument();
    })
});