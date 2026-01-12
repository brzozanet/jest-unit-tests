import { calculateTotalPrice } from "../src/ex-4-calculateTotalPrice";

const cartItemsSample = [
  { price: 10, quantity: 2 },
  { price: 5, quantity: 3 },
  { price: 20, quantity: 1 },
];

const cartItemsInvalidSample1 = [
  { price: "10" as any, quantity: 2 },
  { price: 5, quantity: 3 },
  { price: 20, quantity: 1 },
];

const cartItemsInvalidSample2 = [
  { price: 10, quantity: 2 },
  { price: 5, quantity: 0 },
  { price: 20, quantity: 1 },
];

const errorMessageNonArray = "Cart items must be provided as an array";
const errorMeggageInvalidItem =
  "Invalid item format. Each item must have a valid price and quantity";

test("Proper sum cart products price", () => {
  expect(calculateTotalPrice(cartItemsSample)).toBe(55);
});

// NOTE: not necessary in TypeScript

test("Proper detect non-Array", () => {
  expect(() => {
    calculateTotalPrice("this is string" as any);
  }).toThrow(errorMessageNonArray);
});

// NOTE: not necessary in TypeScript

test("Proper detect invalid item format", () => {
  expect(() => {
    calculateTotalPrice(cartItemsInvalidSample1);
  }).toThrow(errorMeggageInvalidItem);
});

test("Proper detect invalid item format", () => {
  expect(() => {
    calculateTotalPrice(cartItemsInvalidSample2);
  }).toThrow(errorMeggageInvalidItem);
});
