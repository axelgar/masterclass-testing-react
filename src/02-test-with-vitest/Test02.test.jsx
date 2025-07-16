import { Price } from "../components/Price";

/**
 * Here we are going to see how we could test a React component with only Vitest/Jest
 * We are mainly going to use the DOM API (querySelector, createElement, etc)
 * When we need to use "act" utility
 */

beforeEach(() => {
  document.body.innerHTML = "";
});

describe(Price, () => {
  test("correctly shows price value", () => {});

  test("shows badge if product has a discount", () => {});

  test("does not show a badge if product discount is same as original price", () => {});

  test("does not show a badge if product has no discount", () => {});
});
