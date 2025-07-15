import { act } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import { Price } from "../components/Price";

/**
 * Here we are going to see how we could test a React component with only Vitest/Jest
 * We are mainly going to use the DOM API (querySelector, createElement, etc)
 */

beforeEach(() => {
  document.body.innerHTML = "";
});

describe(Price, () => {
  test("correctly shows price value", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    const product = { price: 10, discountPrice: 5, currency: "€" };
    act(() => createRoot(container).render(<Price product={product} />));

    const paragraphs = document.querySelectorAll("p");
    expect(paragraphs[2]).toHaveTextContent("5€");
  });

  test("shows badge if product has a discount", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    const product = { price: 10, discountPrice: 5, currency: "€" };
    act(() => createRoot(container).render(<Price product={product} />));

    const [discountText] = document.querySelectorAll("p");
    expect(discountText).toHaveTextContent("-50%");
  });

  test("does not show a badge if product discount is same as original price", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    const product = { price: 10, discountPrice: 10, currency: "€" };
    act(() => createRoot(container).render(<Price product={product} />));

    const paragraphs = document.querySelectorAll("p");
    expect(paragraphs.length).toBe(1);
  });

  test("does not show a badge if product has no discount", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    const product = { price: 10, currency: "€" };
    act(() => createRoot(container).render(<Price product={product} />));

    const paragraphs = document.querySelectorAll("p");
    expect(paragraphs.length).toBe(1);
  });
});
