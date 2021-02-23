function solve(arr) {
  let heroes = [];

  arr.map((x) => {
    let [name, level, items] = x.split(" / ");

    level = Number(level);

    items = items.split(", ").sort((a, b) => a.localeCompare(b));

    let currentHeroe = {
      name,
      level,
      items,
    };

    heroes.push(currentHeroe);
  });

  let result = "";

  heroes
    .sort((a, b) => a.level - b.level)
    .map((x) => {
      result += `Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items.join(
        ", "
      )}\n`;
    });

  return result;
}

console.log(
  solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
