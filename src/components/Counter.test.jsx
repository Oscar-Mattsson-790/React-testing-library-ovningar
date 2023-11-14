import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("should increase and decrease the value when buttons are clicked", () => {
    render(<Counter />);
    const increaseButton = screen.getByRole("button", { name: "Öka" });
    const decreaseButton = screen.getByRole("button", { name: "Minska" });
    const result = screen.getByText("1");

    expect(result.textContent).toBe("1");

    fireEvent.click(increaseButton);
    expect(result.textContent).toBe("2");

    fireEvent.click(decreaseButton);
    expect(result.textContent).toBe("1");
  });
});
