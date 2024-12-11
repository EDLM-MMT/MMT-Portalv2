import Footer from '@/components/common/Footer';
import { render, screen} from '@testing-library/react';


global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))


describe('Footer', () => {
    it('should show the footer text', () => {
        render(<Footer />);

        expect(screen.getByText('DOD Home Page')).toBeInTheDocument();
        expect(screen.getByText('About ADL')).toBeInTheDocument();
        expect(screen.getByText('Web Policy')).toBeInTheDocument();

        expect(screen.getByText('Privacy')).toBeInTheDocument();
        expect(screen.getByText('Contact US')).toBeInTheDocument();
      });
});