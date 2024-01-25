function listMovies(arr) {
  let movies = [];

  const result = arr.forEach((currentMovie) => {
    if (currentMovie.includes("addMovie")) {
      const name = currentMovie.split("addMovie ")[1];
      movies.push({ name });
    } else if (currentMovie.includes("directedBy")) {
      const [name, director] = currentMovie.split(" directedBy ");
      const movie = movies.find((m) => m.name === name);
      if (movie) {
        movie.director = director;
      }
    } else if (currentMovie.includes("onDate")) {
      const [name, date] = currentMovie.split(" onDate ");
      const movie = movies.find((m) => m.name === name);
      if (movie) {
        movie.date = date;
      }
    }
  });
  movies
    .filter((m) => m.name && m.date && m.director)
    .forEach((movie) => {
      console.log(JSON.stringify(movie));
    });
}

listMovies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);

listMovies([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
