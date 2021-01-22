function solve(input) {
  let data = input.map((row) => row.split("<->").map((el) => el.trim()));

  let towns = {};

  for (let i = 0; i < data.length; i++) {
    let [currentTown, currentPopulation] = data[i];

    if (towns.hasOwnProperty(currentTown)) {
      towns[currentTown] =
        Number(towns[currentTown]) + Number(currentPopulation);
    } else {
      towns[currentTown] = Number(currentPopulation);
    }
  }

  for (const key in towns) {
    console.log(`${key} : ${towns[key]}`);
  }
}

solve([
  "Sofia <-> 1200000",
  "Sofia <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
