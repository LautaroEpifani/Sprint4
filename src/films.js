// Exercise 1: Get the array of all directors.

function getAllDirectors(movies) {
  const result = movies.map((movie) => movie.director);
  // console.log("--->getAllDirectors", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies) {
  const moviesDirector = movies.filter(
    (movieFrom) => movieFrom.director === 'Quentin Tarantino'
  );

  // console.log("---> getMoviesFromDirector", moviesDirector);
  return moviesDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies) {
  const movieFrom = movies.filter(
    (movie) => movie.director === 'Quentin Tarantino'
  );

  const score = movieFrom.map((movieFrom) => movieFrom.score);

  const average = score.reduce((a, b) => a + b, 0) / score.length;

  // console.log(average);
  return average;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
  const movieTitle = movies.map((movie) => movie.title);
  const order = movieTitle.sort((a, b) => (a > b ? 1 : -1));
  order.splice(20, 250);

  // console.log(order)
  return order;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const orderMovies =  movies.map(movie => ({...movie}));

  const result = orderMovies.sort(function (a, b) {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    else {
      if (a.title > b.title) return 1;
      else if (a.title < b.title) return -1;
      return 0;
    }
  });

  // console.log(result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies) {
  const genre = movies.filter(
    (movie) =>
      movie.genre.includes('Action') ||
      movie.score === 7 ||
      movie.score === 7.75 ||
      movie.score === 6
  );

  const score = genre.map((movie) => movie.score);
  const average = score.reduce(function (a, b) {
    if (score.includes('')) {
      return parseFloat((a + b / (score.length - 1)).toFixed(2));
    } else {
      return parseFloat((a + b / score.length).toFixed(2));
    }
  }, 0);

  // console.log(average);

  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const movieduration = movies.map(movie => ({...movie}));

  for (i = 0; i < movieduration.length; i++) {
    const hours = movieduration[i].duration.split('h');

    if (hours[1]) {
      const total = parseInt(hours[0] * 60) + parseInt(hours[1]);
      movieduration[i].duration = total;
    } else {
      const total = parseInt(hours[0] * 60);
      movieduration[i].duration = total;
    }
  }

  console.log(movieduration);
  return movieduration;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies) {
  const bfilmYear = movies.filter((movie) => movie.year === 1957);

  const bfilm = bfilmYear.map((bfilm) => bfilm.score);

  const best = Math.max(...bfilm);

  const bestFilm = bfilmYear.filter((movie) => movie.score === best);

  // console.log(bestFilm)

  return bestFilm;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
