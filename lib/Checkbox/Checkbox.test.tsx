import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Checkbox } from "./Checkbox";
import userEvent from "@testing-library/user-event";

describe("Checkbox Component", () => {
  it("should render the checkbox with a label", () => {
    render(<Checkbox label="Accept Terms" />);
    expect(screen.getByLabelText("Accept Terms")).toBeInTheDocument();
  });

  it("should render an indeterminate checkbox", () => {
    render(<Checkbox label="Select Items" indeterminate />);
    const checkbox = screen.getByLabelText("Select Items") as HTMLInputElement;
    expect(checkbox.indeterminate).toBe(true);
  });

  it("should call the onChange handler when clicked", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox label="Accept Terms" onChange={handleChange} />);

    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should support the checked state", () => {
    render(<Checkbox label="Accept Terms" checked />);
    const checkbox = screen.getByLabelText("Accept Terms") as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it("should support the disabled state", () => {
    render(<Checkbox label="Disabled Checkbox" disabled />);
    const checkbox = screen.getByLabelText("Disabled Checkbox");
    expect(checkbox).toBeDisabled();
  });

  it("should toggle checked state when clicked", async () => {
    const user = userEvent.setup();
    let isChecked = false;
    const handleChange = vi.fn((c) => {
      isChecked = c;
    });
    render(
      <Checkbox
        label="Toggle Checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
    );
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
    expect(isChecked).toBe(true);
  });

  it("can be focused and triggered by keyboard", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox label="Toggle" onChange={handleChange}></Checkbox>);
    const checkbox = screen.getByLabelText("Toggle");
    await user.tab();
    expect(checkbox).toHaveFocus();
    await user.keyboard("{Enter}");
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
