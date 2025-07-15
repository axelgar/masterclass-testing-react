import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
import { WishlistButton } from "../components/WishlistButton";

/**
 * vi.fn() to create mock functions ***
 * vi.spyOn() to check if function has been called
 * vi.mock() to mock modules
 */

describe("Test05:vi.fn", () => {
  test("button is enabled if user is logged int", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<WishlistButton isInWishlist={false} isUserLoggedIn={true} onClick={onClick} />);

    const wishlistButton = screen.getByRole("button");
    await user.click(wishlistButton);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
