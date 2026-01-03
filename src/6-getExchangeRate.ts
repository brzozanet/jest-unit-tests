export function getExchangeRate(amountInPln: number): Promise<string> {
  return fetch(`https://currencies.com/?from=PLN&to=USD&amount=${amountInPln}`)
    .then((response) => response.json())
    .then(
      ({ exchangeRate }) => `Obecny kurs wymiany PLN na USD to: ${exchangeRate}`
    );
}

// Dependency Injection

export function getExchangeRateDi(amountInPln: number, fetchFunction = fetch) {
  return fetchFunction(
    `https://currencies.com/?from=PLN&to=USD&amount=${amountInPln}`
  )
    .then((response) => response.json())
    .then(
      ({ exchangeRate }) => `Obecny kurs wymiany PLN na USD to: ${exchangeRate}`
    );
}
