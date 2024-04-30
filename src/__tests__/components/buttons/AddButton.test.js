import { act, fireEvent, render } from "@testing-library/react";
import AddBtn from "@/components/buttons/AddButton";

describe("Add Button Component", () => {
  it("should render the component", () => {
    const { getByText } = render(<AddBtn btnText={"Test Button"} link={"www.google.com"} />);
    expect(getByText(/Test Button/i)).toBeInTheDocument();
    
    const button = getByText('Test Button');
    act(() => {
        fireEvent.click(button);
    });
  });

});