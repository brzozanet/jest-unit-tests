export function getExchangeRate(amountInPln: number): Promise<string> {
  return fetch(`https://currencies.com/?from=PLN&to=USD&amount=${amountInPln}`)
    .then((response) => response.json())
    .then(
      ({ exchangeRate }) => `Obecny kurs wymiany PLN na USD to: ${exchangeRate}`
    );
}

// Dependency Injection

export function getExchangeRateDi(amountInPln: number, fetch) {
  return fetch(`https://...`) // ← UŻYWAMY fetchFn do pobrania danych
    .then((response) => response.json())
    .then(({ exchangeRate }) => `Obecny kurs...`); // ← ZWRACAMY string
}
