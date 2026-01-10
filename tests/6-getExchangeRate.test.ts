import { getExchangeRate } from "../src/6-getExchangeRate";

test("Wyświetla kurs PLN→USD", async () => {
  const mockGetData = jest.fn().mockResolvedValue(4.5);
  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  await getExchangeRate(100, mockGetData);

  expect(mockGetData).toHaveBeenCalledWith(100);
  expect(logSpy).toHaveBeenCalledWith("Obecny kurs wymiany PLN na USD to: 4.5");

  logSpy.mockRestore();
});
