import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";

describe("Button Component", () => {
  it("renders as disabled and cannot be clicked", () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Click Me
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveProperty("disabled", true);
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
