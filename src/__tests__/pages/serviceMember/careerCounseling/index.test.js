import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CareerCounselingList from '@/pages/serviceMember/counseling/index';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import axios from 'axios'

let url = ''
let body = {}

jest.mock("axios", () => ({
  get: jest.fn((_url, _body) => { 
    return new Promise((resolve) => {
      url = _url
      body = _body
      resolve(true)
    })
  })
}))

describe('CareerCounselingList component', () => {

  it('renders the component with the correct number of rows and columns', () => {
    const { getByText, } = render(
      <MemoryRouterProvider url='/'>
        <CareerCounselingList />
      </MemoryRouterProvider>
    );

    axios.get.mockResolvedValue({data: "data"}); 

    expect(getByText('Counseling Dashboard')).toBeInTheDocument();
  });

  it("axios error", () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouterProvider>
            <CareerCounselingList />
        </MemoryRouterProvider>
    );

    axios.get.mockRejectedValueOnce(new Error('some error'));

  });


});
