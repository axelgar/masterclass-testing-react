import { test } from "vitest";
import { getDiscountPercentage } from "../utils/getDiscountPercentage";

/**
 * Guidelines:
 * Test should have as much as possible all the information they need to run. Not be afraid of repeated code.
 * Test should test one thing. A good rule of thumb is having one "expect" statement per test.
 * Every file should test one system (util, hook, component, etc.).
 * Be consistent!
 * Think of them as a way to document the system. Good place to start for understanding new code.
 * Follow Arrange - Act - Assert structure.
 * https://vitest.dev/api/#test-api-reference
 */

describe(getDiscountPercentage, () => {
  test("returns 0 if no discount price", () => {});

  test("returns the correct discount percentage", () => {});

  test("returns 0 if discount price is equal to original price", () => {});
});
