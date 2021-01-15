function solve(lostFights, helmPrice, swordPrice, shieldPrice, armorPrice) {
  let brokenHelms = Math.floor(lostFights / 2);
  let brokenSwords = Math.floor(lostFights / 3);
  let brokenShield = Math.floor(lostFights / 6);
  let brokenArmors = Math.floor(brokenShield / 2);

  let totalExpenses =
    brokenHelms * helmPrice +
    brokenSwords * swordPrice +
    brokenShield * shieldPrice +
    brokenArmors * armorPrice;

  console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

solve(23, 12.5, 21.5, 40, 200);
