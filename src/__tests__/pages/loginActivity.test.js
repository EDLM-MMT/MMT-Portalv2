import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import LoginActivity from "@/pages/loginActivity";

describe("Login Activity Page", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <LoginActivity />
        </MemoryRouterProvider>
    );

    expect(getByText('Login Activity')).toBeInTheDocument();

  });

});
