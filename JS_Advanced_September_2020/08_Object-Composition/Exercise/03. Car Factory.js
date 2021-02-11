function solve(obj) {
  let { model, power, color, carriage, wheelsize } = obj;

  let output = {
    model: model,
    engine: {},
    carriage: {},
  };

  if (power <= 90) {
    output["engine"]["power"] = 90;
    output["engine"]["volume"] = 1800;
  } else if (power <= 120) {
    output["engine"]["power"] = 120;
    output["engine"]["volume"] = 2400;
  } else if (power <= 200) {
    output["engine"]["power"] = 200;
    output["engine"]["volume"] = 3500;
  }

  if (carriage == "hatchback") {
    output["carriage"]["type"] = "hatchback";
    output["carriage"]["color"] = color;
  } else if (carriage == "coupe") {
    output["carriage"]["type"] = "coupe";
    output["carriage"]["color"] = color;
  }

  if (wheelsize % 2 == 0) {
    wheelsize -= 1;
  }

  let arrWheels = [];

  for (let i = 0; i < 4; i++) {
    arrWheels.push(wheelsize);
  }

  output["wheels"] = arrWheels;

  return output;
}

console.log(
  solve({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);
