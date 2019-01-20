function solve(array) {
  let movies = [];
  for (let row of array) {
    if (row.includes("add movie")) {
      let name = row.split("movie ").pop();
      movies.push({ name: name });
    } else if (row.includes("directed by")) {
      let director = row.split("directed by ").pop();
      let movieName = row.substr(0, row.indexOf(" directed by"));
      for (let object of movies) {
        if (object.name == movieName) {
          object.director = director;
        }
      }
    } else if (row.includes("on date")) {
      let date = row.split("on date ").pop();
      let movame = row.substr(0, row.indexOf(" on date"));
      for (let obj of movies) {
        if (obj.name == movame) {
          obj.date = date;
        }
      }
    }
  }

     for (let movie of movies) {
         if(movie.hasOwnProperty("name") && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')){
             console.log(JSON.stringify(movie))
         }
         
     }
}

solve([
  "add movie Fast and Furious",
  "add movie Godfather",
  "Inception directed by Christopher Nolan",
  "Godfather directed by Francis Ford Coppola",
  "Godfather on date 29.07.2018",
  "Fast and Furious on date 30.07.2018",
  "Batman on date 01.08.2018",
  "Fast and Furious directed by Rob Cohen"
]);
