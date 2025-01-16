import { QueryClientWrapper } from '@/__mocks__/queryClientMock';
import { AdminUsersTable } from '@/components/AdminUsersTable';
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
        expect(screen.findByText('First Name'))
        expect(screen.findByText('Email'))
        expect(screen.findByText('linh.tran@mmt.edu'))
    })
});