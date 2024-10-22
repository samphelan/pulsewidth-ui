import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";
import { createRef } from "react";

describe("Button Component", () => {
  it("renders as disabled and cannot be clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Click Me
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveProperty("disabled", true);
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders as an anchor when the as prop is provided", () => {
    render(
      <Button as="a" href="#">
        Link
      </Button>
    );
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe("A");
  });

  it("applies the correct variant class", () => {
    render(<Button variant="outline">Danger</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("variant--outline");
  });

  it("forwards the ref to the button element", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click Me</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("applies aria attributes correctly", () => {
    render(<Button aria-label="Close">X</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "Close");
  });

  it("can be focused and triggered by keyboard", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByRole("button");
    await user.tab();
    expect(button).toHaveFocus();
    await user.keyboard("{Enter}");
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
