type ExchangeRateResponse = { exchangeRate: number };

export async function loadCurrencyData(amountInPln: number): Promise<number> {
  const response = await fetch(
    `https://currencies.com/?from=PLN&to=USD&amount=${amountInPln}`
  );
  const data: ExchangeRateResponse = await response.json();
  return data.exchangeRate;
}

export async function getExchangeRate(
  amountInPln: number,
  loadCurrencyDataFn = loadCurrencyData
): Promise<void> {
  const result = await loadCurrencyDataFn(amountInPln);
  console.log(`Obecny kurs wymiany PLN na USD to: ${result}`);
}
