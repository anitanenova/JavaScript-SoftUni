function solve(input) {
  let resource = {};
  for (let i = 0; i < input.length; i++) {
    if (!resource.hasOwnProperty(input[i])) {
      if (i % 2 == 0) {
        resource[input[i]] = {};
      } else {
        resource[input[i - 1]] = Number(input[i]);
      }
    } else {
      let oldQuantity = resource[input[i]];
      let test = Number(input[i + 1]);
      resource[input[i]] = oldQuantity + test;
      i += 1;
    }
  }

  let resourceEntries = Object.entries(resource);

  for (const kvp of resourceEntries) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
  }
}

console.log(
  solve([
    "Gold",
    "155",
    "Silver",
    "10",
    "Copper",
    "17",
    "Gold",
    "15",
    "test",
    "15",
  ])
);
