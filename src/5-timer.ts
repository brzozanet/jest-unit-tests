export function cancellableDelay(timeInSeconds = 5, callback: () => void) {
  console.log(
    `Ok, funkcję uruchomię za ${timeInSeconds} sekund. No chyba, że przerwiesz!`
  );

  // Tworzymy timer i zapisujemy jego identyfikator w zmiennej timer
  const timer = setTimeout(() => {
    console.log(`${timeInSeconds} sekund minęło, uruchamiam funkcję!`);
    callback();
  }, timeInSeconds * 1000);

  // Zwracamy funkcję anonimową (bez nazwy)
  // Ta funkcja ma dostęp do zmiennej timer dzięki closure (domknięciu)
  // Użytkownik może nadać tej funkcji dowolną nazwę, np. cancel, stop, anuluj
  return () => {
    // clearTimeout to wbudowana funkcja JavaScript, która anuluje timer
    // timer to identyfikator timera utworzonego w linii 6
    clearTimeout(timer);
  };
}

// const cancel = cancellableDelay(5, () => console.log("Done!"));
// // Po 2 sekundach:
// setTimeout(() => cancel(), 2000);
// // Anuluje timer przed upłynięciem 5s
