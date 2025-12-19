export function getNewShoppingList(): string[] {
  return [];
}

export function addToShoppingList(shoppingList: string[], newItem: string) {
  if (!shoppingList.find((element) => element === newItem)) {
    shoppingList.push(newItem);
  }
}

const shoppingList = getNewShoppingList();
addToShoppingList(shoppingList, "czekolada");
console.log(shoppingList);
