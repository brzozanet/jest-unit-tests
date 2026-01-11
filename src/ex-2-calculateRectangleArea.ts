export function calculateRectangleArea(length: number, width: number): number {
  if (
    typeof length !== "number" ||
    typeof width !== "number" ||
    length <= 0 ||
    width <= 0
  ) {
    throw new Error("Length and width must be positive numbers");
  }

  return length * width;
}

// Twoim zadaniem jest napisanie trzech testów jednostkowych:
// Jeden, który sprawdzi czy funkcja poprawnie oblicza pole prostokąta.
// Drugi, który sprawdzi czy funkcja zgłasza wyjątek, gdy podamy jej argumenty inne niż Numbery.
// Trzeci, który sprawdzi czy funkcja zgłasza wyjątek, gdy podamy jej Numbery mniejsze od zera.
