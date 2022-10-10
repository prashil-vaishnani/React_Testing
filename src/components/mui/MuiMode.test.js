import { render, screen } from "../../test-utils";
import { MuiMode } from "./Mui-mode";

describe("Theme Provider", () => {
  test("render correctly", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
