function solve(input) {
  let initialHealt = 100;
  let initialBitcoins = 0;

  let rooms = input.split("|");

  let result = "";

  for (let i = 0; i < rooms.length; i++) {
    let [command, number] = rooms[i].split(" ");
    number = Number(number);

    if (command === "potion") {
      if (initialHealt < 100) {
        if (initialHealt + number > 100) {
          number = 100 - initialHealt;
        }
        initialHealt += number;
        result += `You healed for ${number} hp.\n`;
      }
      result += `Current health: ${initialHealt} hp.\n`;
    } else if (command === "chest") {
      initialBitcoins += number;
      result += `You found ${number} bitcoins.\n`;
    } else {
      initialHealt -= number;
      if (initialHealt <= 0) {
        result += `You died! Killed by ${command}.\nBest room: ${i + 1}\n`;
        break;
      } else {
        result += `You slayed ${command}.\n`;
      }
    }

    if (i + 1 === rooms.length && initialHealt > 0) {
      result += `You've made it!\nBitcoins: ${initialBitcoins}\nHealth: ${initialHealt}`;
    }
  }

  return result;
}
