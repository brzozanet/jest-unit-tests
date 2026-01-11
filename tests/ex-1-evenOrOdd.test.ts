import { evenOrOdd } from "../src/ex-1-evenOrOdd";

test("Proper find even numbers", () => {
  const sampleEvenNumber = 0;
  const expectedResult = "even";

  expect(evenOrOdd(sampleEvenNumber)).toBe(expectedResult);
});

test("Proper find odd numbers", () => {
  const sampleOddNumber = 1;
  const expectedResult = "odd";

  expect(evenOrOdd(sampleOddNumber)).toBe(expectedResult);
});
