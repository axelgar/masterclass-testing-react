import { act, renderHook } from "@testing-library/react";
import { describe, expect } from "vitest";

import { useWishlistStore } from "../hooks/useWishlistStore";

/**
 * Special utility from RTL renderHook
 * https://github.com/testing-library/react-testing-library/blob/main/src/pure.js#L320-L357
 */

describe(useWishlistStore, () => {
  test("store starts with empty array", () => {
    const { result } = renderHook(useWishlistStore);

    expect(result.current.list.size).toBe(0);
  });

  test("when id is not in list and update is called, id is added to the list", () => {
    const ID = 1;
    const { result } = renderHook(useWishlistStore);

    act(() => result.current.update(ID));

    expect(result.current.list.has(ID)).toBeTruthy();
  });

  test("if id is in the list and update is called, id is removed from it", () => {
    const ID = 1;
    const { result } = renderHook(useWishlistStore);

    act(() => result.current.update(ID));

    expect(result.current.list.has(ID)).toBeTruthy();

    act(() => result.current.update(ID));

    expect(result.current.list.has(ID)).toBeFalsy();
  });
});
