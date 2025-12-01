import { division } from "../src/1-division";

test("Dzielenie liczb całkowitych bez reszty", () => {
  const a = 20;
  const b = 4;
  const expected = 5;

  const result = division(a, b);
  expect(result).toBe(expected);
});

test("Dzielenie przez zero", () => {
  const a = 5;
  const b = 0;
  const expected = Infinity;

  const result = division(a, b);
  expect(result).toBe(expected);
});
