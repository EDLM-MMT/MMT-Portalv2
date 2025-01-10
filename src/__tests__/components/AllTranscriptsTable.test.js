import { QueryClientWrapper } from '@/__mocks__/queryClientMock';
import { AllTranscriptTable } from '@/components/AllTranscriptsTable';
import { render, screen } from '@testing-library/react';

const renderer = () => {
  return render(
    <QueryClientWrapper>
      <AllTranscriptTable />
    </QueryClientWrapper>
  );
};

describe('All Transcripts Table Tests', () => {
    it('Tests that the table renders', () => {
        const screen = renderer()
        expect(screen.findByText('First Name'))
        expect(screen.findByText('Email'))
        expect(screen.findByText('linh.tran@mmt.edu'))
    })
});