import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

describe("HelloWorld", () => {
  it('should display "Hello world" text', () => {
    render(<HelloWorld />);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });
});
