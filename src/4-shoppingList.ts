export const shoppingList: string[] = [];

export function addToShoppingList(newItem: string) {
  if (!shoppingList.find((element) => element === newItem)) {
    shoppingList.push(newItem);
  }
}
