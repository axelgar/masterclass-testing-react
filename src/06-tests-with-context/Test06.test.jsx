import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { expect, vi } from "vitest";
import { NotificationContainer } from "../components/NotificationContainer";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useLocation: () => ({ pathname: "mocked" }),
  };
});

describe(NotificationContainer, () => {
  test("displays current pathname to the user", () => {
    render(<NotificationContainer />, { wrapper: BrowserRouter });

    const toast = screen.getByText(/mocked/i);

    expect(toast).toBeInTheDocument();
  });
});
