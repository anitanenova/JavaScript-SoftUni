function solve(input) {
  let juices = {};
  let bottles = {};
  for (let i = 0; i < input.length; i++) {
    let [juiceName, juiceQuantity] = input[i].split(" => ");

    if (juices.hasOwnProperty(juiceName)) {
      juices[juiceName] += Number(juiceQuantity);
    } else {
      juices[juiceName] = Number(juiceQuantity);
    }

    if (juices[juiceName] >= 1000) {
      if (bottles.hasOwnProperty(juiceName)) {
        bottles[juiceName] += Number(juiceQuantity);
      } else {
        bottles[juiceName] = juices[juiceName];
      }
    }
  }

  for (const key in bottles) {
    console.log(`${key} => ${Math.floor(bottles[key] / 1000)}`);
  }
}

solve([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
