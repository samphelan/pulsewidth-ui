import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Drawer } from "./Drawer";
import userEvent from "@testing-library/user-event";

describe("Drawer Component", () => {
  it("should render children when open", () => {
    render(
      <Drawer open={true} onExit={() => {}}>
        <div>Drawer Content</div>
      </Drawer>
    );
    expect(screen.getByText("Drawer Content")).toBeInTheDocument();
  });

  it("should not render children when closed", () => {
    render(
      <Drawer open={false} onExit={() => {}}>
        <div>Drawer Content</div>
      </Drawer>
    );
    expect(screen.queryByText("Drawer Content")).not.toBeInTheDocument();
  });

  it("should call onExit when clicking outside the drawer", async () => {
    const user = userEvent.setup();
    const onExitMock = vi.fn();
    render(
      <div>
        <div>Outside Click Area</div>
        <Drawer open={true} onExit={onExitMock}>
          <div>Drawer Content</div>
        </Drawer>
      </div>
    );
    await user.click(screen.getByText("Outside Click Area"));
    expect(onExitMock).toHaveBeenCalledTimes(1);
  });

  it("should update visibility when open changes", async () => {
    const { rerender } = render(
      <Drawer open={true} onExit={() => {}}>
        <div>Drawer Content</div>
      </Drawer>
    );
    expect(screen.getByText("Drawer Content")).toBeInTheDocument();
    // Re-render with open set to false
    rerender(
      <Drawer open={false} onExit={() => {}}>
        <div>Drawer Content</div>
      </Drawer>
    );
    // Account for the exit animation which is set to take 200ms
    await waitFor(
      () =>
        expect(screen.queryByText("Drawer Content")).not.toBeInTheDocument(),
      { timeout: 300 }
    );
  });

  it("should apply variant styles", () => {
    render(
      <Drawer open={true} onExit={() => {}} variant="solid">
        <div>Drawer Content</div>
      </Drawer>
    );

    const drawer = screen.getByText("Drawer Content").parentElement;
    expect(drawer).toHaveClass("static-variant--solid");
  });

  it("should apply colorVariant styles", () => {
    render(
      <Drawer open={true} onExit={() => {}} colorVariant="blue">
        <div>Drawer Content</div>
      </Drawer>
    );

    const drawer = screen.getByText("Drawer Content").parentElement;
    expect(drawer).toHaveAttribute("data-color", "blue");
  });
});
