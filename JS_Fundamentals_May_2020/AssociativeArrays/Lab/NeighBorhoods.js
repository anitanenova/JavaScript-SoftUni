function solve(input) {
  let map = new Map();
  let neighborhoods = input.shift().split(", ");

  for (let neighborhood of neighborhoods) {
    map.set(neighborhood, []);
  }

  for (const el of input) {
    let [neighborhood, person] = el.split(" - ");
    if (map.has(neighborhood)) {
      map.get(neighborhood).push(person);
    }
  }

  let sorted = Array.from(map).sort((a, b) => b[1].length - a[1].length);

  for (const kvp of sorted) {
    console.log(`${kvp[0]}: ${kvp[1].length}`);
    for (let i = 0; i < kvp[1].length; i++) {
      console.log(`--${kvp[1][i]}`);
    }
  }
}

console.log(
  solve([
    "Abbey Street, Herald Street, Bright Mews",
    "Bright Mews - Garry",
    "Bright Mews - Andrea",
    "Invalid Street - Tommy",
    "Abbey Street - Billy",
  ])
);
