import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("render correctly", () => {
    render(<Counter />);

    const counterElement = screen.getByRole("heading");
    expect(counterElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", {
      name: "+",
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test("render count 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("reander 1 after clicking button for first times", async () => {
    user.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole("button", {
      name: "+",
    });
    await user.click(buttonElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("reander 2 after clicking button for second times", async () => {
    user.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole("button", {
      name: "+",
    });
    await user.dblClick(buttonElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });
});
