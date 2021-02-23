function solve(arr) {
  let movies = [];

  for (let i = 0; i < arr.length; i++) {
    let currentEl = arr[i];

    if (currentEl.includes("addMovie")) {
      let [command, name] = currentEl.split("addMovie ");

      movies.push({ name });
    } else if (currentEl.includes("directedBy")) {
      let [name, director] = currentEl.split(" directedBy ");
      movies.forEach((x) => {
        if (x.name == name) {
          x.director = director;
        }
      });
    } else if (currentEl.includes("onDate")) {
      let [name, date] = currentEl.split(" onDate ");
      movies.forEach((x) => {
        if (x.name == name) {
          x.date = date;
        }
      });
    }
  }

  let result = "";

  movies.map((x) => {
    if (x.name && x.director && x.date) {
      result += `${JSON.stringify(x)}\n`;
    }
  });

  return result;
}
