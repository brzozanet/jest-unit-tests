import { yearlyProfitCalculator } from "../src/2-profits";

test("Obliczanie kwoty zysku z lokaty", () => {
  const startAmount = 10000;
  const interestRate = 20;
  const expected = 1620;

  const result = yearlyProfitCalculator(startAmount, interestRate);
  expect(result).toBe(expected);
});
