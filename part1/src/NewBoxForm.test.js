import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";
import BoxList from "./BoxList";

it("renders", () => {
    render(<NewBoxForm />);
});
  
it("matches snapshot", () => {
    const {asFragment} = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("creates a box", () => {
    const {container} = render(<BoxList/>);
    const button = container.querySelector("form button");
    fireEvent.click(button);
    expect(container.querySelector(".Box")).toBeInTheDocument();
});