export function getTasksForADay() {
  const now = new Date();
  const day = now.getDay();
  const month = now.getMonth();

  const season = Math.floor((month / 12) * 4) % 4;
  const activities = ["Narty", "Spacer", "Wycieczka rowerowa", "Bieganie"];

  console.log(now, day, month, global, now.getDay, now.getMonth, global.Date);

  switch (day) {
    case 0:
      return "Odpoczynek";
    case 1:
      return "Zakupy";
    case 2:
      return "Sprzątanie łazienki";
    case 3:
      return "Spotkanie ze znajomymi";
    case 4:
      return "Sprzątanie";
    case 5:
      return "Zapłata rachunków";
    case 6:
      return activities[season];
  }
}

// Twoim zadaniem jest napisanie testów jednoskowych sprawdzających czy funkcja zwraca poprawne zadania
// dla odpowiednich dni tygodnia i pór roku. Zastosuj Dependency Injection, aby poprawić kod funkcji tak,
// aby był testowalny.
