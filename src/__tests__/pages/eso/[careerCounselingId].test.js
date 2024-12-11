import { fireEvent, render } from "@testing-library/react";
import {act} from 'react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import axios from 'axios'
import CareerCounseling from "@/pages/eso/counseling/[careerCounselingId]";

let url = ''
let body = {}

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))


jest.mock("axios", () => ({
  get: jest.fn((_url, _body) => { 
    return new Promise((resolve) => {
      url = _url
      body = _body
      resolve(true)
    })
  })
})) 

describe("Counseling View Page", () => {
  it("should render the component", () => {
    const { getByText, getAllByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <CareerCounseling />
        </MemoryRouterProvider>
    );

    expect(getByText('Counseling')).toBeInTheDocument();
    expect(getByText('View Transcript')).toBeInTheDocument();
    expect(getByText('School:')).toBeInTheDocument();
    expect(getByText('Degree Start Date:')).toBeInTheDocument();
    expect(getByText('Total Credit Hours:')).toBeInTheDocument();
    expect(getByText('Save Changes')).toBeInTheDocument();
    expect(getAllByText('Add a comment:').length).toBe(2);
    expect(getAllByText('Post').length).toBe(1);
    expect(getByText('Counseling Communication Timeline')).toBeInTheDocument();

    expect(getByPlaceholderText('Please provide comments if necessary.')).toBeInTheDocument();
    act(() => {
      fireEvent.change(getByPlaceholderText('Please provide comments if necessary.'), {
        target: { value: 'test' },
      });
    });

    const button = getByText('Post');
    act(() => {
      fireEvent.click(button);
    });

  });

  it("should navigate to Counseling Dashboard page", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <CareerCounseling />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: []});

    expect(getByText('Counseling Dashboard')).toBeInTheDocument();
    const button = getByText('Counseling Dashboard');
    act(() => {
        fireEvent.click(button);
    });
  });

  it("should add course", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
        <MemoryRouterProvider>
            <CareerCounseling />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: []});

    const button = getByText('Add Courses');
    act(() => {
        fireEvent.click(button);
    });

    act(() => {
      fireEvent.change(getByPlaceholderText('Course Number'), {
        target: { value: 'COP1101' },
      });
    });
    act(() => {
      fireEvent.change(getByPlaceholderText('Course Name'), {
        target: { value: 'Prog 1' },
      });
    });
    act(() => {
      fireEvent.change(getByPlaceholderText('Credit Hours'), {
        target: { value: '3' },
      });
    });

    const reqButton = getByTestId('test-course-required');
    act(() => {
        fireEvent.click(reqButton);
    });

    act(() => {
      fireEvent.change(getByPlaceholderText('Projected Semester'), {
        target: { value: 'Fall 2023' },
      });
    });

    expect(getByText('Add Course')).toBeInTheDocument();
    const button2 = getByText('Add Course');
    act(() => {
        fireEvent.click(button2);
    });
  });

  it("should click Save button", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <CareerCounseling />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: []});

    expect(getByText('Save Changes')).toBeInTheDocument();
    const button = getByText('Save Changes');
    act(() => {
        fireEvent.click(button);
    });
  });

  it("should update Notes section", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <CareerCounseling />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: []});

    expect(getByText('Select one')).toBeInTheDocument();
    const button = getByText('Select one');
    act(() => {
        fireEvent.click(button);
    });

    const button2 = getByText('Advised');
    act(() => {
        fireEvent.click(button2);
    });

    act(() => {
      fireEvent.change(getByPlaceholderText('Notes'), {
        target: { value: 'Comment Added' },
      });
    });

    const postBtton = getByText('Post Note');
    act(() => {
        fireEvent.click(postBtton);
    });

  });

  it("should click confirm plan button", () => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;

    const { getByText } = render(
        <MemoryRouterProvider>
            <CareerCounseling />
        </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: []});

    expect(getByText('Confirm Plan')).toBeInTheDocument();
    const button = getByText('Confirm Plan');
    act(() => {
        fireEvent.click(button);
    });
  });

});
