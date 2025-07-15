import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { expect } from "vitest";
import { Test10 } from "./Test10";
import mockProducts from "./mock-products.json";

// Let's take a look to and advance mocking strategy to mock API calls to our server
// We will use MSW https://mswjs.io/
// https://github.com/mswjs/examples
// https://testing-library.com/docs/react-testing-library/example-intro

const server = setupServer(
  http.get("/", () => {
    return HttpResponse.json(mockProducts);
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe(Test10, () => {
  test("show list of products", async () => {
    render(<Test10 />);

    await waitForElementToBeRemoved(screen.getByRole("alert"));

    const productsList = screen.getByRole("list");

    expect(productsList).toBeInTheDocument();
  });

  test("shows not found message when api returns empty array", async () => {
    server.use(
      http.get("/", () => {
        return HttpResponse.json([]);
      }),
    );

    render(<Test10 />);

    await waitForElementToBeRemoved(screen.getByRole("alert"));

    const notFoundMessage = screen.getByText(/no products found/i);

    expect(notFoundMessage).toBeInTheDocument();
  });
});
