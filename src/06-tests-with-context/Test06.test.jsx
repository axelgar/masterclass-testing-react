import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router";
import { afterEach, expect, vi } from "vitest";
import { NotificationContainer } from "../components/NotificationContainer";

/**
 * How to test components that depend on some Context
 * https://testing-library.com/docs/react-testing-library/setup#custom-render
 * Check the vi.importActual when mocking
 */

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useLocation: () => ({ pathname: "mocked" }),
  };
});

describe(NotificationContainer, () => {
  afterEach(vi.restoreAllMocks);

  test("displays current pathname to the user", () => {
    render(<NotificationContainer />, { wrapper: BrowserRouter });

    const toast = screen.getByText(/mocked/i);

    expect(toast).toBeInTheDocument();
  });

  test("can be closed", async () => {
    const user = userEvent.setup();
    render(<NotificationContainer />, { wrapper: BrowserRouter });

    const closeButton = screen.getByRole("button", { name: /close/i });

    await user.click(closeButton);

    const toast = screen.getByText(/mocked/i);

    expect(toast).not.toBeInTheDocument;
  });
});
