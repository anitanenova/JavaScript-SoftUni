function solve(input) {
  let wonBattles = 0;
  let health = Number(input.shift());
  let result = "";

  for (const commands of input) {
    if (commands !== "End of battle") {
      let energy = Number(commands);
      if (health - energy < 0) {
        return (result += `Not enough energy! Game ends with ${wonBattles} won battles and ${health} energy`);
      }
      health -= energy;
      wonBattles++;
    } else {
      return (result += `Won battles: ${wonBattles}. Energy left: ${health}`);
    }
    if (wonBattles % 3 === 0) {
      health += wonBattles;
    }
  }
}
