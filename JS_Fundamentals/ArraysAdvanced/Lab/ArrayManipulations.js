function solve(commands) {
  let arr = commands.shift().split(" ").map(Number);

  for (let i = 0; i < commands.length; i++) {
    let [command, number, index] = commands[i].split(" ");
    number = Number(number);
    index = Number(index);

    switch (command) {
      case "Add":
        arr.push(number);
        break;
      case "Remove":
        arr = arr.filter((num) => num !== number);
        break;
      case "RemoveAt":
        arr.splice(number, 1);
        break;
      case "Insert":
        arr.splice(index, 0, number);
        break;
      default:
        arr.splice(index, 0, number);
        break;
    }
  }
  return arr.join(" ");
}

console.log(solve(["2, 5, 7", "Add 3", "Remove 2"]));
