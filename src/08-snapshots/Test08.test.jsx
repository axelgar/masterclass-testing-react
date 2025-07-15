import { render } from "@testing-library/react";
import { describe, expect } from "vitest";
import { Test08 } from "./Test08";

/**
 * We need to know they exist but we don't want to use them
 * Check toMatchSnapshot API
 * https://vitest.dev/guide/snapshot.html
 * https://jestjs.io/docs/snapshot-testing
 */

describe(Test08, () => {
  test("snapshot", () => {
    const component = render(<Test08 />);

    expect(component.baseElement).toMatchSnapshot();
  });
});
