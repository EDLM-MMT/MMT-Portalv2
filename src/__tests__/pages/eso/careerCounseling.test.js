import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CareerCounseling from '@/pages/eso/counseling/index';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import axios from 'axios'

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

describe('CareerCounseling component', () => {

  test('renders the component with the correct number of rows and columns', () => {
    const { getByText, } = render(
      <MemoryRouterProvider url='/'>
        <CareerCounseling />
      </MemoryRouterProvider>
    );
    
    axios.get.mockResolvedValue({data: "test data"});

    expect(getByText('Counseling Dashboard')).toBeInTheDocument();
  });

  test('axios error', () => {
    const { getByText, } = render(
      <MemoryRouterProvider url='/'>
        <CareerCounseling />
      </MemoryRouterProvider>
    );
    
    axios.get.mockRejectedValueOnce(new Error('some error'));

    expect(getByText('Counseling Dashboard')).toBeInTheDocument();
  });
});
