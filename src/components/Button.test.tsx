import { Button } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("should render", () => {
    render(<Button />);

    expect(screen.getByText("Click me!")).toBeInTheDocument();
  });

  it("should trigger onClick when clicked", () => {
    const mockOnClick = jest.fn();

    render(<Button onClick={mockOnClick} />);

    screen.getByRole("button", { name: /click me!/i }).click();

    expect(mockOnClick).toHaveBeenCalled();
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
