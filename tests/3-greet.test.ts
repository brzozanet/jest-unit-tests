import { greetEveryone } from "../src/3-greet";

const person = [
  { name: "Paweł", surname: "Brzozowski" },
  { name: "Anna", surname: "Sterkowicz" },
];

const noPerson = [];

test("Powitanie dla pierwszej osoby, tablica", () => {
  const result = greetEveryone([person[0]]);
  expect(result).toEqual([`Cześć Paweł Brzozowski! Miło Cię widzieć`]);
});

test("Powitanie dla pierwszej osoby, string", () => {
  const result = greetEveryone([person[0]]);
  expect(result[0]).toContain("Paweł Brzozowski");
});

test("Powitanie wszystkich osób", () => {
  const result = greetEveryone(person);
  expect(result).toHaveLength(2);
  expect(result[0]).toContain("Paweł");
  expect(result[1]).toContain("Anna");
});

test("Brak osób do powitania", () => {
  const result = greetEveryone(noPerson);
  expect(result).toEqual([]);
});
