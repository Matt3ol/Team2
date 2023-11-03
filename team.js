let myArray = [
  {
    name: "Matteo",
    surname: "Leacche",
    age: "25",
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
    age: "29",
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
    age: "22",
    city: "Roma",
    hobby: "coding",
    favoriteFood: "pasta arrabbiata",
    favoriteVideoGame: "dark souls",
    favoriteFilm: "Pulp Fiction",
    favoriteBook: "C++",
    petName: "Attila",
  },
];
function ordinaNomiCognomiAlfabetico(array) {
    const risultato = array
      .map(function (persona) {
        return {
          name: persona.name,
          surname: persona.surname,
        };
      })
      .sort(function (a, b) {
        const nomeA = a.name.toLowerCase();
        const nomeB = b.name.toLowerCase();
        const cognomeA = a.surname.toLowerCase();
        const cognomeB = b.surname.toLowerCase();
  
        if (nomeA < nomeB) return -1;
        if (nomeA > nomeB) return 1;
  
        if (cognomeA < cognomeB) return -1;
        if (cognomeA > cognomeB) return 1;
  
        return 0;
      });
  
    return risultato;
  }
  
  const risultatoOrdinato = ordinaNomiCognomiAlfabetico(myArray);
  
  console.log(risultatoOrdinato);