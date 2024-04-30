
if(!('TextEncoder' in window)) {
    window.TextEncoder = require('util').TextEncoder
}

import mockAxios from 'jest-mock-axios';
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import LoginPage from "../../pages/index";


describe("LoginPage page", () => {
  it("should render the page", () => {
    const { getByText, getAllByText } = render(
        <MemoryRouterProvider>
            <LoginPage />
        </MemoryRouterProvider>
    );
  });

});