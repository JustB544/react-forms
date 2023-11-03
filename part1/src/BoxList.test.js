import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";
import TEST_BOXES from "./_testcommon";

it("renders", () => {
    render(<BoxList />);
});
  
it("matches snapshot", () => {
    const {asFragment} = render(<BoxList initial={TEST_BOXES}/>);
    expect(asFragment()).toMatchSnapshot();
});

it("deletes a box", () => {
    const {container} = render(<BoxList initial={TEST_BOXES}/>);
    const box1 = container.querySelector("#box1 button");
    fireEvent.click(box1);
    expect(box1).not.toBeInTheDocument();
});