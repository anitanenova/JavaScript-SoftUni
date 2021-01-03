function solve(numbers) {
  let copy = numbers.slice();
  let maxCapacity = Number(copy[1]);
  let train = copy[0].split(" ").map(makeMeNumber);

  function makeMeNumber(element) {
    return Number(element);
  }

  let commands = copy.slice(2);

  for (let command of commands) {
    let commandInfo = command.split(" ");

    if (commandInfo.length === 2) {
      let wagon = Number(commandInfo[1]);
      train.push(wagon);
    } else {
      let passagers = Number(commandInfo[0]);

      for (let wagon in train) {
        let currentPassagers = train[wagon];
        if (passagers + currentPassagers <= maxCapacity) {
          train[wagon] += passagers;
          break;
        }
      }
    }
  }

  return train.join(" ");
}

console.log(
  solve(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"])
);
