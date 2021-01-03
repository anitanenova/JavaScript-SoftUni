function solve(input) {
  let map = new Set();

  for (const line of input) {
    let [direction, carNumber] = line.split(", ");
    if (direction == "IN") {
      map.add(carNumber);
    } else if (direction == "OUT") {
      map.delete(carNumber);
    }
  }

  let sorted = Array.from(map).sort((a, b) => a.localeCompare(b));
  for (const item of sorted) {
    console.log(item);
  }
}

console.log(
  solve([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "IN, CA9999TT",
    "IN, CA2866HI",
    "OUT, CA1234TA",
    "IN, CA2844AA",
    "OUT, CA2866HI",
    "IN, CA9876HH",
    "IN, CA2822UU",
  ])
);
