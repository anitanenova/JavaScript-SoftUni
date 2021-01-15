function solve(firstArr, secondArr) {
  let modifiedArr = [];
  let result = "";
  for (let i = 0; i < firstArr.length; i++) {
    if (i % 2 == 0) {
      modifiedArr[i] = Number(firstArr[i]) + Number(secondArr[i]);
    } else {
      modifiedArr[i] = firstArr[i] + secondArr[i];
    }
  }

  console.log(modifiedArr.join(" - "));
}

solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
