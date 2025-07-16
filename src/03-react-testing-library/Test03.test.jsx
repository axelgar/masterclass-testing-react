import { WishlistButton } from "../components/WishlistButton";

/**
 * Let's see how to use the library React Testing Library instead of the DOM API
 * Guiding principle: The more your tests resemble the way your software is used, the more confidence they can give you.
 * Avoid implementation details
 * Types of query getBy... queryBy... findBy... https://testing-library.com/docs/queries/about/#priority
 * Queries priority https://testing-library.com/docs/queries/about/#priority
 * Use of screen vs container
 * Use of screen.debug
 */

describe(WishlistButton, () => {
  test("renders correctly", () => {});

  test("button is disabled if user is not logged in", () => {});

  test("shows remove from wishlist if isInWishlist", () => {});
});
