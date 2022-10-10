import { render, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("initial render correctly", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
  test("should accept and render same intial value", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });
});
