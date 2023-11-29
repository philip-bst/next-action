import { Button } from "./Button";
import { render, screen } from "@testing-library/react";

it("renders a button with the text 'Click me!'", () => {
  render(<Button />);

  expect(screen.getByText("Click h me!")).toBeInTheDocument();
});
