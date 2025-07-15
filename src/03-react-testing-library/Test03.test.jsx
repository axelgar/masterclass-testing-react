import { render, screen } from "@testing-library/react";
import { WishlistButton } from "../components/WishlistButton";

/**
 * Let's see how to use the library React Testing Library instead of the DOM API
 * Types of query getBy... queryBy... findBy... https://testing-library.com/docs/queries/about/#priority
 * Queries priority https://testing-library.com/docs/queries/about/#priority
 * Use of screen vs container
 * Use of screen.debug
 */

describe(WishlistButton, () => {
  test("renders correctly", () => {
    render(<WishlistButton isUserLoggedIn={true} isInWishlist={false} />);

    const wishlistButton = screen.getByRole("button");

    expect(wishlistButton).toBeInTheDocument();
  });

  test("button is disabled if user is not logged in", () => {
    render(<WishlistButton isUserLoggedIn={false} isInWishlist={false} />);

    const wishlistButton = screen.getByRole("button");

    expect(wishlistButton).toBeDisabled();
  });

  test("shows remove from wishlist if isInWishlist", () => {
    render(<WishlistButton isUserLoggedIn={true} isInWishlist={true} />);

    const wishlistButton = screen.getByRole("button");

    expect(wishlistButton).toHaveTextContent("Remove from wishlist");
  });
});
