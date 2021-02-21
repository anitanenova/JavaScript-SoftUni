function solve(arr) {
  let wagon = arr.shift().split(" ").map(Number);

  const maxCapacityOfWagon = Number(arr.shift());

  arr.map((x) => {
    let [command, number] = x.split(" ");
    number = Number(number);

    if (command == "Add") {
      wagon.push(number);
    } else {
      command = Number(command);

      for (let key in wagon) {
        if (wagon[key] + command <= maxCapacityOfWagon) {
          wagon[key] = Number(wagon[key]) + command;
          break;
        }
      }
    }
  });

  return wagon.join(" ");
}
