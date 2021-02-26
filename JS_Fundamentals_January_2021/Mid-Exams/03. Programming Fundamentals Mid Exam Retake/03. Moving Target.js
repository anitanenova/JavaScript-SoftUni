function solve(input) {
  let targets = input.shift().split(" ").map(Number);

  let result = "";

  for (let i = 0; i < input.length; i++) {
    let [command, index, value] = input[i].split(" ");
    index = Number(index);
    value = Number(value);

    if (command === "Shoot") {
      if (index < targets.length && index >= 0) {
        if (targets[index] > value) {
          targets[index] -= value;
        } else {
          targets.splice(index, 1);
        }
      }
    } else if (command === "Add") {
      if (index < targets.length && index >= 0) {
        targets.splice(index, 0, value);
      } else {
        result += `Invalid placement!\n`;
      }
    } else if (command === "Strike") {
      let startIndex = index - value;
      let endIndex = index + value;
      if (startIndex >= 0 && endIndex < targets.length) {
        targets.splice(startIndex, endIndex - startIndex + 1);
      } else {
        result += `Strike missed!\n`;
      }
    } else if (command === "End") {
      result += targets.join("|");
    }
  }

  return result;
}

console.log(solve(["1 2 3 4 5", "Strike 0 1", "End"]));
