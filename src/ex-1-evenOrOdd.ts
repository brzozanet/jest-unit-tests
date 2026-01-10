export function evenOrOdd(number: number): "even" | "odd" {
  return number % 2 === 0 ? "even" : "odd";
}

// Twoim zadaniem jest napisanie dwóch testów jednostkowych:
// Jeden, który sprawdzi czy funkcja poprawnie wykrywa liczby parzyste.
// Drugi, który sprawdzi czy funkcja poprawnie wykrywa liczby nieparzyste.
