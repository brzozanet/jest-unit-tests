type CartItem = { price: number; quantity: number };

export function calculateTotalPrice(cartItems: CartItem[]): number {
  if (!Array.isArray(cartItems)) {
    throw new Error("Cart items must be provided as an array");
  }

  let totalPrice = 0;

  for (const item of cartItems) {
    if (
      typeof item.price !== "number" ||
      typeof item.quantity !== "number" ||
      item.price <= 0 ||
      item.quantity <= 0
    ) {
      throw new Error(
        "Invalid item format. Each item must have a valid price and quantity."
      );
    }
    totalPrice += item.price * item.quantity;
  }

  return totalPrice;
}

// Twoim zadaniem jest napisanie następujących jednostkowych:
// Jeden, który sprawdzi czy funkcja poprawnie oblicza całkowitą wartość koszyka.
// Drugi, który sprawdzi czy funkcja zgłasza wyjątek, gdy podamy jej w argumencie coś innego niż tablicę.
// Dodatkowe testy, które sprawdzą czy funkcja poprawnie reaguje, gdy przekażemy jej niepoprawne obiekty reprezentujące produkty w koszyku.
