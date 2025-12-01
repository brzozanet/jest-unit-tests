import { division } from "../src/1-division";

test("Test dzielenia", () => {
  const a = 20;
  const b = 4;
  const expected = 5;

  const result = division(a, b);

  expect(result).toBe(expected);
});
