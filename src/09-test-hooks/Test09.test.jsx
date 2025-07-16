import { useWishlistStore } from "../hooks/useWishlistStore";

/**
 * Special utility from RTL renderHook
 * https://github.com/testing-library/react-testing-library/blob/main/src/pure.js#L320-L357
 */

describe(useWishlistStore, () => {
  test("store starts with empty array", () => {});

  test("when id is not in list and update is called, id is added to the list", () => {});

  test("if id is in the list and update is called, id is removed from it", () => {});
});
