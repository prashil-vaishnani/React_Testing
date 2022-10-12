import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("rander correctly", () => {
    render(<Application />);

    /*getByRole without options */
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();

    /* heading test case */
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

    /* getByRole with Options */
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    /* getByLabelText textcase */
    const nameElement2 = screen.getByLabelText("Name", {
      selector: "select",
    });
    expect(nameElement2).toBeInTheDocument();

    /* getByLabelText with Options textcase */
    const termsElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(termsElement2).toBeInTheDocument();

    /*getByPlaceHolderText */
    const placeholderNameElement = screen.getByPlaceholderText("Full Name");
    expect(placeholderNameElement).toBeInTheDocument();

    /*getByText */
    const paragraphElement = screen.getByText(/ fields /i);
    expect(paragraphElement).toBeInTheDocument();

    /*getByDisplayValue */
    const displayElement = screen.getByDisplayValue("prashil");
    expect(displayElement).toBeInTheDocument();

    /*getByAltText */
    const imageElement = screen.getByAltText("with 4k resolution");
    expect(imageElement).toBeInTheDocument();

    /*getByTitle */
    const titleElement = screen.getByTitle("close");
    expect(titleElement).toBeInTheDocument();

    /* getByTestId*/
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
  });
});
