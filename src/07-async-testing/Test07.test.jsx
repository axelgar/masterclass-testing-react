import { render, screen, waitFor } from "@testing-library/react";
import { expect } from "vitest";
import { Test07 } from "./Test07";

/**
 * Let's explore how to interact with async systems when testing
 * Check findByRole and waitFor APIs
 * https://testing-library.com/docs/dom-testing-library/api-async/
 */

describe(Test07, () => {
  test("shows spinner when first renders", () => {
    render(<Test07 />);

    const spinner = screen.getByRole("alert");

    expect(spinner).toBeInTheDocument();
  });

  test("findByRole: shows content after loading has finished", async () => {
    render(<Test07 />);

    const spinner = screen.getByRole("alert");
    expect(spinner).toBeInTheDocument();

    const button = await screen.findByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("waitFor: shows content after loading has finished", async () => {
    render(<Test07 />);

    const spinner = screen.getByRole("alert");
    expect(spinner).toBeInTheDocument();

    await waitFor(() => expect(screen.getByRole("button")).toBeInTheDocument());
  });
});
