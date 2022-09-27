import { render, screen } from "@testing-library/react";
import { Greet } from "../components/greet/Greet";

describe("Greet", () => {
  test("Greeting sholud be visible", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  // test("Greeting to Prashil", () => {
  //   render(<Greet name="Prashil" />);
  //   const textElement = screen.getByText("Hello Prashil");
  //   expect(textElement).toBeInTheDocument();
  // });
});
