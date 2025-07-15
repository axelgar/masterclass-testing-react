import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Test04 } from "./Test04";
/**
 * Create test with DOM API
 * Use fireEvent
 * Use userEvent, recommended since it better mimics the browser behavior
 * https://testing-library.com/docs/user-event/setup
 * Use regex to make tests more robust
 */

describe(Test04, () => {
  test("fireEvent: calls onClick prop when button is clicked", async () => {
    render(<Test04 />);

    const addToWishlistButton = screen.getByRole("button", { name: /add to wishlist/i });
    expect(addToWishlistButton).toBeInTheDocument();

    fireEvent.click(addToWishlistButton);

    const removeFromWishlistButton = screen.getByRole("button", { name: /remove from wishlist/i });
    expect(removeFromWishlistButton).toBeInTheDocument();
  });

  test("userEvent: calls onClick prop when button is clicked", async () => {
    const user = userEvent.setup();
    render(<Test04 />);

    const addToWishlistButton = screen.getByRole("button", { name: /add to wishlist/i });
    expect(addToWishlistButton).toBeInTheDocument();

    await user.click(addToWishlistButton);

    const removeFromWishlistButton = screen.getByRole("button", { name: /remove from wishlist/i });
    expect(removeFromWishlistButton).toBeInTheDocument();
  });
});
