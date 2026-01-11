export function findMaxNumber(numbers: number[]): number {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Input must be a non-empty array");
  }

  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

// Twoim zadaniem jest napisanie trzech testów jednostkowych:
// Jeden, który sprawdzi czy funkcja poprawnie odnajduje największą wartość. Pamiętaj, że liczby mogą być ujemne!
// Drugi, który sprawdzi czy funkcja zgłasza wyjątek, gdy podamy jej w argumencie coś innego niż tablicę.
// Trzeci, który sprawdzi czy funkcja zgłasza wyjątek, gdy podamy jej w argumencie pustą tablicę.
