import { render, screen } from "@testing-library/react";
import * as hooks from "../hooks/useIsUserLoggedInRandom";
import { Test05 } from "./Test05";

/**
 * vi.fn() to create mock functions
 * vi.spyOn() to check if function has been called ***
 * vi.mock() to mock modules
 * https://vitest.dev/guide/mocking
 * https://jestjs.io/docs/mock-functions
 */

describe("Test05:spyOn", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test("button is enabled if user is logged int", () => {
    vi.spyOn(hooks, "useIsUserLoggedInRandom").mockReturnValue(true);
    render(<Test05 />);

    const wishlistButton = screen.getByRole("button", { name: /add to wishlist/i });

    expect(wishlistButton).toBeEnabled();
  });

  test("button is disabled if user is logged int", () => {
    vi.spyOn(hooks, "useIsUserLoggedInRandom").mockReturnValue(false);
    render(<Test05 />);

    const wishlistButton = screen.getByRole("button", { name: /add to wishlist/i });

    expect(wishlistButton).toBeDisabled();
  });
});
