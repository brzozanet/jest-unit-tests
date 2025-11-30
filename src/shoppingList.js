export const shoppingList = [];

export function addToShoppingList(newItem) {
  if (!shoppingList.find((element) => element === newItem)) {
    shoppingList.push(newItem);
  }
}
