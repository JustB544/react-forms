import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
import TEST_TODOS from "./_testcommon";

it("renders", () => {
    render(<TodoList />);
});
  
it("matches snapshot", () => {
    const {asFragment} = render(<TodoList initial={TEST_TODOS}/>);
    expect(asFragment()).toMatchSnapshot();
});

it("deletes a todo", () => {
    const {container} = render(<TodoList initial={TEST_TODOS}/>);
    const todo1 = container.querySelector("#todo1 button");
    fireEvent.click(todo1);
    expect(todo1).not.toBeInTheDocument();
});