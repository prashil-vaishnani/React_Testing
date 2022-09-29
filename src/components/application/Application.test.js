import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("rander correctly", () => {
    render(<Application />);

    const heading = screen.getByRole("heading", {
      name: "Job description Form",
    });
    expect(heading).toBeInTheDocument();

    const headingByLabel = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingByLabel).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      name: "section 1",
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();
  });
});
