import { render, screen, fireEvent } from "@testing-library/react";
import AutoCapitalizeInput from "./AutoCapitalizeInput";

describe("AutoCapitalizeInput", () => {
  it("capitalizes the first letter of the input text", () => {
    render(<AutoCapitalizeInput />);
    const input = screen.getByLabelText("Auto-capitalized input");

    fireEvent.change(input, { target: { value: "hello" } });
    expect(input.value).toBe("Hello");

    fireEvent.change(input, { target: { value: "good day" } });
    expect(input.value).toBe("Good day");
  });
});
