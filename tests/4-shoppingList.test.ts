import { addToShoppingList, getNewShoppingList } from "../src/4-shoppingList";

const sampleFirstProduct = "czekolada";
const sampleSecondProduct = "pomidory";

test("Czy element zostaje dodany do listy", () => {
  const shoppingList = getNewShoppingList();
  addToShoppingList(shoppingList, sampleFirstProduct);
  expect(shoppingList).toContain("czekolada");
});

test("Czy duplikaty nie są dodawane", () => {
  const shoppingList = getNewShoppingList();
  addToShoppingList(shoppingList, sampleFirstProduct);
  addToShoppingList(shoppingList, sampleFirstProduct);
  expect(shoppingList.length).toBe(1);
});

test("Czy tablica ma odpowiednią długość po dodaniu", () => {
  const shoppingList = getNewShoppingList();
  addToShoppingList(shoppingList, sampleFirstProduct);
  addToShoppingList(shoppingList, sampleSecondProduct);
  expect(shoppingList.length).toBe(2);
});
