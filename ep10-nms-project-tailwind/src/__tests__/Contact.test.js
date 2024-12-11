import { render, screen } from "@testing-library/react";
import Contact from "../components/Pages/Contact/Contact";
import "@testing-library/jest-dom";

/**************Unit Testing*** */
describe("Contact Us page Test Cases", () => {
  test("Should load contact us component", () => {
    render(<Contact />); //render is jsdom

    const heading = screen.getByRole("heading"); //check all heading in component

    expect(heading).toBeInTheDocument();
  });

  test("Should load contact us component", () => {
    render(<Contact />); //render is jsdom

    const button = screen.getByRole("button"); //check all button in component (quering give JSX element as output)

    expect(button).toBeInTheDocument();
  });

  it("Should load contact us component", () => {
    render(<Contact />); //render is jsdom

    const text = screen.getByText("Contact"); //check all text in component

    expect(text).toBeInTheDocument();
  });
});
