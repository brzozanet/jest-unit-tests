import { cancellableDelay } from "../src/5-timer";

jest.useFakeTimers();
const timeDelaySec = 5;

test("Checking the fn call after a delay", () => {
  const callback = jest.fn();
  cancellableDelay(timeDelaySec, callback);
  jest.advanceTimersByTime(timeDelaySec * 1000);
  expect(callback).toHaveBeenCalled();
});

test("Checking the cancel function", () => {
  const callback = jest.fn();
  const cancel = cancellableDelay(timeDelaySec, callback);
  cancel(); // Anuluj timer
  jest.advanceTimersByTime(timeDelaySec * 1000);
  expect(callback).not.toHaveBeenCalled();
});
