let myArray = [
  {
    name: "Matteo",
    surname: "Leacche",
    age: 25,
    city: "Roma",
    hobby: "calcio",
    favoriteFood: "pizza",
    favoriteVideoGame: "fifa",
    favoriteFilm: "hateful eight",
    favoriteBook: "il sentiero dei nidi di ragno",
    petName: "nala",
  },
  {
    name: "Fabrizio",
    surname: "Pala",
    age: 29,
    city: "Torino",
    hobby: "Anime",
    favoriteFood: "Pollo fritto",
    favoriteVideoGame: "Skyrim",
    favoriteFilm: "Forrest Gump",
    favoriteBook: "IT",
    petName: "haru",
  },

  {
    name: "Junela",
    surname: "Dedja",
    age: 26,
    city: "Ravenna",
    hobby: "fotografia",
    favoriteFood: "",
    favoriteVideogame: "",
    favoriteFilm: "",
    favoriteBook: "",
    petName: "Dior",
  },
  {
    name: "Raul",
    surname: "Zahariuc",
    age: 21,
    city: "Roma",
    hobby: "e-Sport",
    favoriteFood: "Sushi",
    favoriteVideogame: "Jak and Dexter",
    favoriteFilm: "Wiplash",
    favoriteBook: "Uno studio in rosso",
    petName: "",
  },
  {
    name: "Salvatore",
    surname: "Marotta",
    age: 32,
    city: "Licata",
    hobby: "play the guitar",
    favoriteFood: "pizza",
    favoriteVideoGame: "GTA",
    favoriteFilm: "Titanic",
    favoriteBook: "padre ricco padre povero",
    petName: "Nino",
  },
  {
    name: "Matteo",
    surname: "Shurdhaqi",
    age: 22,
    city: "Roma",
    hobby: "coding",
    favoriteFood: "pasta arrabbiata",
    favoriteVideoGame: "dark souls",
    favoriteFilm: "Pulp Fiction",
    favoriteBook: "C++",
    petName: "Attila",
  },
];

function etaMedia(myArray) {
  let sommaEta = 0;
  for (let i = 0; i < myArray.length; i++) {
    sommaEta += myArray[i].age;
  }
  let etaMedia = sommaEta / myArray.length;
  return etaMedia;
}

const media = etaMedia(myArray);
console.log(media);
