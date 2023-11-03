import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

it("renders", () => {
    render(<NewTodoForm />);
});
  
it("matches snapshot", () => {
    const {asFragment} = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("creates a todo", () => {
    const {container} = render(<TodoList/>);
    const button = container.querySelector("form button");
    fireEvent.click(button);
    expect(container.querySelector(".Todo")).toBeInTheDocument();
});