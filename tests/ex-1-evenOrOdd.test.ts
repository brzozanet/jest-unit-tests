import { evenOrOdd } from "../src/ex-1-evenOrOdd";

test("Proper find even numbers", () => {
  expect(evenOrOdd(2)).toBe("even");
  expect(evenOrOdd(0)).toBe("even");
  expect(evenOrOdd(-2)).toBe("even");
});

test("Proper find odd numbers", () => {
  expect(evenOrOdd(1)).toBe("odd");
  expect(evenOrOdd(-3)).toBe("odd");
});
