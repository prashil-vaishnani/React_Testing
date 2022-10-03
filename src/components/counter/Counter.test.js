import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter", () => {
  /*component render check */
  test("render correctly", () => {
    render(<Counter />);

    const counterElement = screen.getByRole("heading");
    expect(counterElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", {
      name: "+",
    });
    expect(buttonElement).toBeInTheDocument();
  });

  /* initial value check */
  test("render count 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  /*onclick increment value check */
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

  /*keyboard event check */
  test("keyboard key change handler", async () => {
    user.setup();
    render(<Counter />);
    const amountElement = screen.getByRole("spinbutton");
    await user.type(amountElement, "10");
    expect(amountElement).toHaveValue(10);

    const setButton = screen.getByRole("button", {
      name: "set",
    });
    await user.click(setButton);
    const headingValue = screen.getByRole("heading");
    expect(headingValue).toHaveTextContent("10");
  });

  test("30 as an output", async () => {
    user.setup();
    render(<Counter />);
    const amountElement = screen.getByRole("spinbutton");
    await user.type(amountElement, "30");
    expect(amountElement).toHaveValue(30);

    const setAmount = screen.getByRole("button", {
      name: "set",
    });
    await user.click(setAmount);
    const headingValue = screen.getByRole("heading");
    expect(headingValue).toHaveTextContent("30");
  });
});
