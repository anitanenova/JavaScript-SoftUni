function solve(input) {
  let list = new Set();
  let listVip = [];
  let listRegular = [];
  for (const line of input) {
    if (list.has(line)) {
      list.delete(line);
    } else if (line == "PARTY") {
      continue;
    } else {
      list.add(line);
    }
  }

  for (const guest of list) {
    if (parseInt(guest[0])) {
      listVip.push(guest);
    } else {
      listRegular.push(guest);
    }
  }

  console.log(Array.from(list).length);
  listVip.forEach((x) => console.log(x));
  listRegular.forEach((x) => console.log(x));
}

console.log(
  solve([
    "7IK9Yo0h",
    "9NoBUajQ",
    "Ce8vwPmE",
    "SVQXQCbc",
    "tSzE5t0p",
    "PARTY",
    "9NoBUajQ",
    "Ce8vwPmE",
    "SVQXQCbc",
  ])
);
