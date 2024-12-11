import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { render } from '@testing-library/react';
import ViewBtn from "@/components/buttons/ViewBtn";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

const renderer = () => {
  return render(
    <MemoryRouterProvider url='/'>
      <ViewBtn transcriptType={"test"} />
    </MemoryRouterProvider>
  );
};

describe('ShareBtn', () => {
  it('has an id', () => {
    const { getByRole } = renderer();

    expect(getByRole('button').id).not.toBeNull();
  });

  
});
