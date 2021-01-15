function solve(input) {
  let heros = [];

  for (let i = 0; i < input.length; i++) {
    let [name, level, items] = input[i].split(" / ");
    let hero = {
      name: name,
      level: Number(level),
      items: items
        .split(", ")
        .sort((a, b) => a.localeCompare(b))
        .join(", "),
    };

    heros.push(hero);
  }
  let arrLevels = [];
  for (let i = 0; i < heros.length; i++) {
    let levels = heros[i].level;
    arrLevels.push(levels);
  }
  arrLevels.sort((a, b) => a - b);

  for (let i = 0; i < arrLevels.length; i++) {
    for (let y = 0; y < heros.length; y++) {
      let currentHero = heros[y];
      for (const key in currentHero) {
        if (currentHero[key] == arrLevels[i]) {
          console.log(
            `Hero: ${currentHero.name} \nlevel => ${currentHero.level} \nitems => ${currentHero.items}`
          );
        }
      }
    }
  }
}

console.log(
  solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
