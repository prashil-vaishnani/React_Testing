import { render, screen } from "@testing-library/react";
import { AppProviders } from "../../providers/App-provider";
import { MuiMode } from "./Mui-mode";

describe("Theme Provider", () => {
  test("render correctly", () => {
    render(<MuiMode />, {
      wrapper: AppProviders,
    });
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
