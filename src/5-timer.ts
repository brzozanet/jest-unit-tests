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
// test 1
// test 2

// import React, { useState } from 'react';

// export function Counter() {
//   const [count, setCount] = useState<number>(0);

//   return (
//     <div>
//       <h2>Licznik: {count}</h2>
//       <div>
//         <button onClick={() => setCount(c => c - 1)}>-</button>
//         <button onClick={() => setCount(c => c + 1)}>+</button>
//         <button onClick={() => setCount(0)}>Reset</button>
//       </div>
//     </div>
//   );
// }