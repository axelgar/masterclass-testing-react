import { getDiscountPercentage } from "../utils/getDiscountPercentage";

/**
 * Guidelines:
 * Test should have as much as possible all the information they need to run. Not be afraid of repeated code.
 * Test should test one thing. A good rule of thumb is having one "expect" statement per test.
 * Every file should test one system (util, hook, component, etc.).
 * Think of them as a way to document the system. Good place to start for understanding new code.
 * Follow Arrange - Act - Assert structure.
 */

describe(getDiscountPercentage, () => {
  test("returns 0 if no discount price", () => {
    // Arrange
    const products = [{ price: 10 }];

    // Act
    const discountPercentage = getDiscountPercentage(products);

    // Assert
    expect(discountPercentage).toBe(0);
  });

  test("returns the correct discount percentage", () => {
    const products = [{ price: 10, discountPrice: 5 }];

    const discountPercentage = getDiscountPercentage(products);

    expect(discountPercentage).toBe(50);
  });

  test("returns 0 if discount price is equal to original price", () => {
    const products = [{ price: 10, discountPrice: 10 }];

    const discountPercentage = getDiscountPercentage(products);

    expect(discountPercentage).toBe(0);
  });
});
