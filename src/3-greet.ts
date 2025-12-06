export function greetEveryone(
  people: { name: string; surname: string }[]
): string[] {
  return people.map(
    ({ name, surname }) => `Cześć ${name} ${surname}! Miło Cię widzieć`
  );
}
