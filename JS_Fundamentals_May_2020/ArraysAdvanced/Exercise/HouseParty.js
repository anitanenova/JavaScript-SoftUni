function solve(list) {
  let guests = [];

  for (let infoLine of list) {
    let info = infoLine.split(" ");
    let name = info[0];
    if (!info.includes("not")) {
      if (!guests.includes(name)) {
        guests.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
      if (guests.includes(name)) {
        guests = guests.filter((guestName) => guestName !== name);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  return guests.join("\n");
}

console.log(
  solve([
    "Allie is going!",
    "George is going!",
    "John is not going!",
    "George is not going!",
  ])
);
