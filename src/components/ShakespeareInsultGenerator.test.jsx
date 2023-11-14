import { render, screen, fireEvent } from "@testing-library/react";
import ShakespeareInsultGenerator from "./ShakespeareInsultGenerator";

describe("ShakespeareInsultGenerator", () => {
  it('should display "Awaiting insult..." initially', () => {
    render(<ShakespeareInsultGenerator />);
    expect(screen.getByText('"Awaiting insult..."')).toBeInTheDocument();
  });

  it("should display an insult when the button is clicked", () => {
    render(<ShakespeareInsultGenerator />);
    const button = screen.getByText("Insult me!");
    fireEvent.click(button);

    const displayedInsult = screen.getByText((content, node) => {
      return (
        node.tagName.toLowerCase() === "p" && content !== "Awaiting insult..."
      );
    });

    expect(displayedInsult).toBeInTheDocument();
  });

  it("should display a different insult when the button is clicked again", () => {
    render(<ShakespeareInsultGenerator />);
    const button = screen.getByText("Insult me!");
    fireEvent.click(button);
    const firstInsult = screen.getByText((content, node) => {
      return (
        node.tagName.toLowerCase() === "p" && content !== "Awaiting insult..."
      );
    }).textContent;

    fireEvent.click(button);
    const secondInsult = screen.getByText((content, node) => {
      return (
        node.tagName.toLowerCase() === "p" && content !== "Awaiting insult..."
      );
    }).textContent;

    expect(secondInsult).not.toBe(firstInsult);
  });
});
