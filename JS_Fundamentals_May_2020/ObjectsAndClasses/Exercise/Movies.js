function solve(input) {
  let movieCollection = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("addMovie")) {
      let newMovie = { name: input[i].split("addMovie ")[1] };
      movieCollection.push(newMovie);
    } else if (input[i].includes("directedBy")) {
      let [name, director] = input[i].split(" directedBy ");
      for (let i = 0; i < movieCollection.length; i++) {
        let movie = movieCollection[i];
        for (const el in movie) {
          if (name == movie[el]) {
            movie["director"] = director;
          }
        }
      }
    } else if (input[i].includes("onDate")) {
      let [name, date] = input[i].split(" onDate ");
      for (let i = 0; i < movieCollection.length; i++) {
        let movie = movieCollection[i];
        for (const el in movie) {
          if (name == movie[el]) {
            movie["date"] = date;
          }
        }
      }
    }
  }

  for (let i = 0; i < movieCollection.length; i++) {
    let movie = movieCollection[i];
    if (movie.hasOwnProperty("director") && movie.hasOwnProperty("date")) {
      console.log(JSON.stringify(movie));
    }
  }
}

console.log(
  solve([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Batman onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen",
  ])
);
