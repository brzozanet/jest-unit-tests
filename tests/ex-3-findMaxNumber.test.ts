import { findMaxNumber } from "../src/ex-3-findMaxNumber";

const errorMessage = "Input must be a non-empty array";

test("Proper find max value", () => {
  expect(findMaxNumber([1, 4, 9, 0, -1])).toBe(9);
  expect(findMaxNumber([-1, -4, -9, 0, 1])).toBe(1);
  expect(findMaxNumber([0])).toBe(0);
});

// NOTE: not necessary in TypeScript

test("Proper detect non-Array", () => {
  expect(() => {
    findMaxNumber("this is string" as any);
  }).toThrow(errorMessage);
  expect(() => {
    findMaxNumber(123 as any);
  }).toThrow(errorMessage);
});

test("Proper detect empty array", () => {
  expect(() => {
    findMaxNumber([]);
  }).toThrow(errorMessage);
});
