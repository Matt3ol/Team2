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
    favoriteVideogame: "LOL",
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

// feature Matteo S.
function findDuplicateNames(arr){
  const names = [];
  const duplicateNames = [];

  for(const obj of arr){
    const name = obj.name;
    names.includes(name) && !duplicateNames.includes(name) ? duplicateNames.push(name) : names.push(name);
  }

  if(duplicateNames.length > 0){
    return duplicateNames;
  }else{
    return 'Non ci sono nomi doppi';
  }

}

 console.log(findDuplicateNames(myArray));

// feature Matteo L.
function findOwnerPet (arr){
  for (let i = 0;i<arr.length;i++){
  let obj = arr[i];
  if (obj.name && obj.petName){
    console.log(obj.name,obj.petName)
  }
  }

}

findOwnerPet (myArray)
// feature junela
let newAge = myArray.map(function (obj) {
  /* con map ho fatto lista, quindi crea un array ordinato */ 
  return obj.age; /*quello che funzione mi deve ritornare */
});
let orderedAge = newAge.sort(); /* metto in ordine lista fatta con map */
console.log(orderedAge);

/* map prende age di ogni oggetto e quello che torna è age di ogni obj dentro oggetto */
/* new age è uguale a valori dopo = */

/* metto tutto in ordine, ritorno valore che voglio, faccio sort e stampo */

// feature Raul
function playerLOL(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    let membri = myArray[i];
    if (
      membri.favoriteVideoGame === "LOL" ||
      membri.favoriteVideoGame === "League Of Legends"
    ) {
      console.log(membri.name);
    }
  }
}
playerLOL (myArray)

// feature Salvatore
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



