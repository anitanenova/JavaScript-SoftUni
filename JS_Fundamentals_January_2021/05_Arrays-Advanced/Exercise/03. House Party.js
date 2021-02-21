function solve(arr) {
  let guests = [];

  let result = "";
  arr.map((x) => {
    let [name, , command] = x.split(" ");

    if (command != "not") {
      if (!guests.includes(name)) {
        guests.push(name);
      } else {
        result += `${name} is already in the list!\n`;
      }
    } else {
      if (guests.includes(name)) {
        guests.splice(guests.indexOf(name), 1);
      } else {
        result += `${name} is not in the list!\n`;
      }
    }
  });

  guests.map((x) => (result += `${x}\n`));

  return result;
}
