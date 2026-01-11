import { calculateRectangleArea } from "../src/ex-2-calculateRectangleArea";

test("Proper calculate rectangle area", () => {
  expect(calculateRectangleArea(10, 5)).toBe(50);
  expect(calculateRectangleArea(12, 12)).toBe(144);
});

// test not necessary in TypeScript

// test("Proper throw error if arguments isn't numbers", () => {
//   expect(() => {
//     calculateRectangleArea("długość", "szerokość");
//   }).toThrow("Length and width must be positive numbers");
// });

const errorMessage = "Length and width must be positive numbers";

test("Proper throw error in number isn't positive", () => {
  expect(() => {
    calculateRectangleArea(-5, 10);
  }).toThrow(errorMessage);
});

test("Proper throw error in number isn't positive", () => {
  expect(() => {
    calculateRectangleArea(5, 0);
  }).toThrow(errorMessage);
});
