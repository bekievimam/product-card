const profile = {
  name: "Imam",
  age: 19,
  city: "Derbent",
  country: "Russia",
  job: "Frontend Developer",
  jobTitle: "Junior",
}

const car = {
  brand: "Porsche",
  model: "911 GTR3",
  release: 2022,
  color: "gray",
  transmission: "automatic",
}

car.owner = profile;

function checkMaxSpeed(carObject) {
  if ("maxSpeed" in carObject) {
    return
  }
  carObject.maxSpeed = 300;
}

checkMaxSpeed(car);
console.log(car)

function getPropertyValue(obj, key) {
  console.log(obj[key]);
}

getPropertyValue(car, "brand");

const product = ["Яблоко", "Молоко", "Хлеб", "Сыр"];

const movies = [
  { title: "Тёмный рыцарь", director: "Кристофер Нолан", year: 2008, genre: "Триллер / Боевик", duration: "152 мин" },
  { title: "Выживший", director: "Алехандро Г. Иньярриту", year: 2015, genre: "Приключения / Драма", duration: "156 мин" },
  { title: "Пленницы", director: "Дени Вильнёв", year: 2013, genre: "Детектив / Триллер", duration: "153 мин" },
  { title: "Гарри Поттер и философский камень", director: "Крис Коламбус", year: 2001, genre: "Фэнтези / Приключения", duration: "152 мин" },
];

movies.push({
  title: "Интерстеллар",
  director: "Кристофер Нолан",
  year: 2014,
  genre: "Фантастика / Драма",
  duration: "169 мин"
});

console.log(movies);

const marvelMovies = [
  { title: "Железный человек", director: "Джон Фавро", year: 2008, genre: "Фантастика / Боевик", duration: "126 мин" },
  { title: "Мстители", director: "Джосс Уидон", year: 2012, genre: "Фантастика / Боевик", duration: "143 мин" },
  { title: "Стражи Галактики", director: "Джеймс Ганн", year: 2014, genre: "Фантастика / Комедия", duration: "121 мин" }
];

const allMovies = [...movies, ...marvelMovies];
console.log(allMovies);

function addRareProperty(moviesList) {
  return moviesList.map((movie) => {
    return {
      ...movie,
      isRare: movie.year > 2000
    };
  });
}

const updatedMovies = addRareProperty(allMovies);
console.log(updatedMovies);