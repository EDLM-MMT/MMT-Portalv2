
if(!('TextEncoder' in window)) {
    window.TextEncoder = require('util').TextEncoder
}

import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import LoginPage from "../../pages/index";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))


describe("LoginPage page", () => {
  it("should render the page", () => {
    render(
        <MemoryRouterProvider>
            <LoginPage />
        </MemoryRouterProvider>
    );
  });

});