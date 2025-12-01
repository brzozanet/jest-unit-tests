export function greetEveryone(
  people: { name: string; surname: string }[]
): string[] {
  return people.map(
    ({ name, surname }) => `Cześć ${name} ${surname}! Miło Cię widzieć`
  );
}

const person = [
  { name: "Paweł", surname: "Brzozowski" },
  { name: "Anna", surname: "Sterkowicz" },
];

console.log(greetEveryone(person));
