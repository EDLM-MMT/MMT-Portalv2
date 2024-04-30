import AccountsManagementId from "@/pages/programAdmin/accountsManagement/[accountsManagementId]";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import mockAxios from "@/__mocks__/axios";
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
      const { getByText, getByPlaceholderText } = render(
          <MemoryRouterProvider>
              <AccountsManagementId />
          </MemoryRouterProvider>
      );
  
      axios.get.mockRejectedValueOnce(new Error('some error'));
  
    });
    
  });