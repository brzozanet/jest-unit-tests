export function solveQuadraticEquation(a, b, c) {
  if (a === 0) {
    throw new Error('Coefficient "a" must not be zero');
  }

  const delta = b * b - 4 * a * c;

  if (delta < 0) {
    return [];
  } else if (delta === 0) {
    const root = -b / (2 * a);
    return [root];
  } else {
    const sqrtDiscriminant = Math.sqrt(delta);
    const root1 = (-b + sqrtDiscriminant) / (2 * a);
    const root2 = (-b - sqrtDiscriminant) / (2 * a);
    return [root1, root2];
  }
}

// Twoim zadaniem jest napisanie następujących jednostkowych:
// Jeden, który sprawdzi czy funkcja poprawnie znajduje dwa rozwiazania funkcji kwadatowej (np. dla a = 1, b = -3, c = 2).
// Drugi, który sprawdzi czy funkcja poprawnie znajduje pojedyńcze rozwiązanie funkcji kwadartowej (np. dla a = 1, b = -2, c = 1).
// Dodatkowe testy, które sprawdzą czy funkcja poprawnie reaguje, gdy przekażemy jej niepoprawne dane.
