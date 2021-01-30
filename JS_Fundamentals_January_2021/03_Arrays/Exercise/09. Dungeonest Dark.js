function solve(arr) {
  let health = 100;
  let coins = 0;
  let noDied = true;

  let rooms = arr[0].split("|");

  for (let i = 0; i < rooms.length; i++) {
    let [item, monsterNumber] = rooms[i].split(" ");
    monsterNumber = Number(monsterNumber);

    if (item == "potion") {
      if (health < 100) {
        if (health + monsterNumber > 100) {
          monsterNumber = 100 - health;
        }
        health += monsterNumber;
      } else {
        monsterNumber = 0;
      }

      console.log(
        `You healed for ${monsterNumber} hp.\nCurrent health: ${health} hp.`
      );
    } else if (item == "chest") {
      if (monsterNumber != "") {
        console.log(`You found ${monsterNumber} coins.`);
        coins += monsterNumber;
      }
    } else {
      health -= monsterNumber;

      if (health <= 0) {
        console.log(`You died! Killed by ${item}.`);
        console.log(`Best room: ${i + 1}`);
        noDied = false;
        break;
      } else {
        console.log(`You slayed ${item}.`);
      }
    }
  }

  if (noDied) {
    console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
  }
}

solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
