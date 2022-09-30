import { render, screen } from "@testing-library/react";
import { Skill } from "./Skill";

describe("skill", () => {
  const skills = ["html", "css", "react", "graphQl", "redux", "nextjs"];
  test("render correctly", () => {
    render(<Skill skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });
  test("render a list correctly", () => {
    render(<Skill skills={skills} />);

    const listItemsElement = screen.getAllByRole("listitem");
    expect(listItemsElement).toHaveLength(skills.length);
  });

  test("render Login Button", () => {
    render(<Skill skills={skills} />);

    const buttonElement = screen.getByRole("button", {
      name: "Login",
    });
    expect(buttonElement).toBeInTheDocument();
  });
  test("render start Button", () => {
    render(<Skill skills={skills} />);

    const startButton = screen.queryByRole("button", {
      name: "start",
    });
    expect(startButton).not.toBeInTheDocument();
  });
});
