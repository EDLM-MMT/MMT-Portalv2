import { fireEvent, render } from "@testing-library/react";
import { act } from "react";
import DownloadButton from "@/components/buttons/DownloadButton";


global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))


describe("Download Button Component", () => {

  const onChange = (e) => {
    e.preventDefault();
    console.log(e);
  }

  it("should render the component", () => {
    const { getByText } = render(<DownloadButton link={"test"}/>);
    expect(getByText(/Download/i)).toBeInTheDocument();
    
    const button = getByText('Download');
    act(() => {
        fireEvent.click(button);
    });

    const button1 = getByText('PDF');
    act(() => {
        fireEvent.click(button1);
    });
  });

  it("should render the component", () => {
    const { getByText } = render(<DownloadButton link={"www.google.com"}/>);
    expect(getByText(/Download/i)).toBeInTheDocument();
    
    const button = getByText('Download');
    act(() => {
        fireEvent.click(button);
    });

    const button1 = getByText('Word');
    act(() => {
        fireEvent.click(button1);
    });
  });

});