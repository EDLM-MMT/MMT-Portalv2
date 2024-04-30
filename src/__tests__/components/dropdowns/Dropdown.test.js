import Dropdown from "@/components/dropdowns/Dropdown";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';


describe("Dropdown component", () => {

    const onChange = (e) => {
      console.log(e);
    }
    
    it("should render the component", () => {
      const { getByText } = render(
        <MemoryRouterProvider>
          <Dropdown options={["School", "Major", "MOS Code"]} initialValue={"School"} keyName={"Type"} onChange={onChange}/>
        </MemoryRouterProvider>
      );
      expect(getByText(/School/i)).toBeInTheDocument();
      const button = getByText('School');
      act(() => {
          fireEvent.click(button);
      });
      const button2 = getByText('Major');
      act(() => {
          fireEvent.mouseOver(getByText('Major'));
          fireEvent.click(button);
      });

    });
});
