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
    favouriteFood: "",
    favouriteVideogame: "",
    favouriteFilm: "",
    favouriteBook: "",
    petNam: "Dior",
  },
  {
    name: "Raul",
    surname: "Zahariuc",
    age: 21,
    city: "Roma",
    hobby: "e-Sport",
    favouriteFood: "Sushi",
    favouriteVideogame: "Jak and Dexter",
    favouriteFilm: "Wiplash",
    favouriteBook: "Uno studio in rosso",
    petNam: "",
  },
  {
    name: "Salvatore",
    surname: "Marotta",
    age: 32,
    city: "Licata",
    hobby: "play the guitar",
    favoriteFood: "pizza",
    favoriteVideoGame:"GTA",
    favoriteFilm:"Titanic",
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

let newAge = myArray.map (function(obj){ /* con map ho fatto lista, quindi crea un array ordinato */
  return obj.age /*quello che funzione mi deve ritornare */
});
let orderedAge = newAge.sort(); /* metto in ordine lista fatta con map */
console.log (orderedAge);

/* map prende age di ogni oggetto e quello che torna è age di ogni obj dentro oggetto */
/* new age è uguale a valori dopo = */

/* metto tutto in ordine, ritorno valore che voglio, faccio sort e stampo */