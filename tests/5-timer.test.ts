import { cancellableDelay } from "../src/5-timer"

const callback = jest.fn()
jest.useFakeTimers()

test("Checking the fn call after a delay", () => {
  cancellableDelay(1, callback)
  jest.advanceTimersByTime(1000)
  expect(callback).toHaveBeenCalled()
})