import AccountsManagementId from "@/pages/programAdmin/accountsManagement/[accountsManagementId]";
import { fireEvent, render } from "@testing-library/react";
import { act } from 'react';
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

describe("Management View page", () => {
  test("should render the page", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
            <AccountsManagementId />
        </MemoryRouterProvider>
      );
      expect(getByText('Login History')).toBeInTheDocument();
    
      axios.get.mockResolvedValue({data: {}});


      const button = getByText('Account Management');
      act(() => {
          fireEvent.click(button);
      });
    });

    test("should axios error", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
            <AccountsManagementId />
        </MemoryRouterProvider>
      );
      expect(getByText('Login History')).toBeInTheDocument();
    
      axios.get.mockResolvedValue({data: "test data"});


      const button = getByText('Account Management');
      act(() => {
          fireEvent.click(button);
      });
    });

    it("axios error", () => {
      render(
          <MemoryRouterProvider>
              <AccountsManagementId />
          </MemoryRouterProvider>
      );
  
      axios.get.mockRejectedValueOnce(new Error('some error'));
  
    });
    
  });