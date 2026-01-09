type ExchangeRateResponse = { exchangeRate: number };

async function getData(amountInPln: number): Promise<number> {
  const response = await fetch(
    `https://currencies.com/?from=PLN&to=USD&amount=${amountInPln}`
  );
  const data: ExchangeRateResponse = await response.json();
  return data.exchangeRate;
}

export async function showExchangeRate(
  amountInPln: number,
  getDataFn = getData
): Promise<void> {
  const result = await getDataFn(amountInPln);
  console.log(`Obecny kurs wymiany PLN na USD to: ${result}`);
}
