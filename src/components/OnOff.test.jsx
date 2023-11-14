import { render, screen, fireEvent } from "@testing-library/react";
import OnOff from "./OnOff";

describe("OnOff", () => {
  it('should toggle text from "on" to "off" and back', () => {
    render(<OnOff />);
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("on");
    fireEvent.click(button);
    expect(button.textContent).toBe("off");
    fireEvent.click(button);
    expect(button.textContent).toBe("on");
  });
});
