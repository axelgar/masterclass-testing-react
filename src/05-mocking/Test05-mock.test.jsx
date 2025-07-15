import { render, screen } from "@testing-library/react";
import { useIsUserLoggedInRandom } from "../hooks/useIsUserLoggedInRandom";
import { Test05 } from "./Test05";

/**
 * vi.fn() to create mock functions
 * vi.spyOn() to check if function has been called
 * vi.mock() to mock modules ***
 */

vi.mock("../hooks/useIsUserLoggedInRandom");

describe("Test05:mock", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("button is enabled if user is logged int", () => {
    vi.mocked(useIsUserLoggedInRandom).mockImplementationOnce(() => true);
    render(<Test05 />);

    const wishlistButton = screen.getByRole("button", { name: /add to wishlist/i });

    expect(wishlistButton).toBeEnabled();
  });

  test("button is disabled if user is logged int", () => {
    vi.mocked(useIsUserLoggedInRandom).mockImplementationOnce(() => false);
    render(<Test05 />);

    const wishlistButton = screen.getByRole("button", { name: /add to wishlist/i });

    expect(wishlistButton).toBeDisabled();
  });
});
