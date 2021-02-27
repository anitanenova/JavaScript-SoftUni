function solve(input) {
  let countSugarCubes = input.shift();
  let newArr = [];
  for (let i = 0; i < input.length; i++) {
    let [command, value, replacement] = input[i].split(" ");
    value = Number(value);

    if (command === "Add") {
      countSugarCubes.push(value);
    } else if (command === "Remove") {
      countSugarCubes.splice(countSugarCubes.indexOf(value), 1);
    } else if (command === "Replace") {
      countSugarCubes.splice(countSugarCubes.indexOf(value), 1, replacement);
    } else if (command === "Collapse") {
      for (let i = 0; i < countSugarCubes.length; i++) {
        if (value <= countSugarCubes[i]) {
          newArr.push(countSugarCubes[i]);
        }
      }
      countSugarCubes = newArr;
    } else if (command === "Mort") {
      return countSugarCubes.join(" ");
    }
  }
}
