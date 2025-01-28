'use strict';

import { NewTranscriptTable } from '@/components/NewTranscriptTable';
import { QueryClientWrapper } from '@/__mocks__/queryClientMock';
import { render, screen } from '@testing-library/react';

const renderer = () => {
  return render(
    <QueryClientWrapper>
      <NewTranscriptTable />
    </QueryClientWrapper>
  );
};

describe('New Transcript Table Tests', () => {
    it('Tests that the table renders', () => {
        const screen = renderer()
        expect(screen.findByText('First Name'))
        expect(screen.findByText('Email'))
        expect(screen.findByText('linh.tran@mmt.edu'))
    })
});