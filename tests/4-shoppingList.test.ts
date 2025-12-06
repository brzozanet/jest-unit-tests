import { addToShoppingList, shoppingList } from "../src/4-shoppingList";

const sampleFirstProduct = "pastylki pudrowe";
const sampleSecondProduct = "torebka na prezent";
const sampleThirdProduct = "ketchup do pizzy";

test("Czy element zostaje dodany do listy", () => {
  addToShoppingList(sampleFirstProduct);
  expect(shoppingList).toContain("pastylki pudrowe");
});

test("Czy duplikaty nie są dodawane", () => {
  shoppingList.length = 0;
  addToShoppingList(sampleFirstProduct);
  addToShoppingList(sampleFirstProduct);
  expect(shoppingList.length).toBe(1);
});

test("Czy tablica ma odpowiednią długość po dodaniu", () => {
  shoppingList.length = 0;
  addToShoppingList(sampleSecondProduct);
  addToShoppingList(sampleThirdProduct);
  expect(shoppingList.length).toBe(2);
});
