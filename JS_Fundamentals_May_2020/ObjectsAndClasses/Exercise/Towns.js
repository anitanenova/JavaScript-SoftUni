function solve(input) {
  let objects = [];

  for (let i = 0; i < input.length; i++) {
    let [town, latitude, longitude] = input[i].split(" | ");

    let obj = {
      town: town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };

    objects.push(obj);

    console.log(obj);
  }
}

console.log(
  solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"])
);
