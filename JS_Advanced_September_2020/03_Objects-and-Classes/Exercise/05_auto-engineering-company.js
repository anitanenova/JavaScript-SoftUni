function solve(input) {
  let brands = new Map();
  for (const line of input) {
    let [brand, model, produced] = line.split(" | ");

    if (!brands.has(brand)) {
      brands.set(brand, new Map());
    }

    let mapModels = brands.get(brand);
    if (!mapModels.has(model)) {
      mapModels.set(model, 0);
    }
    mapModels.set(model, mapModels.get(model) + Number(produced));
  }
  for (const brand of brands.keys()) {
    console.log(brand);
    let mapModels = brands.get(brand);
    for (const model of mapModels.keys()) {
      console.log(`###${model} -> ${mapModels.get(model)}`);
    }
  }
}

solve([
  "Audi | Q7 | 1000",
  "Audi | Q7 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
