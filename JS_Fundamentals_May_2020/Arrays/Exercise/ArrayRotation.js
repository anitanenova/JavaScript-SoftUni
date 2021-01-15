function solve(arr, rot) {
  let rotation = rot % arr.length;
  let firstPartArr = "";
  let secondPartArr = "";

  for (let i = 0; i < rotation; i++) {
    firstPartArr += arr[i] + " ";
  }
  for (let j = 0; j < arr.length - rotation; j++) {
    secondPartArr += arr[j + Number(rotation)] + " ";
  }
  console.log(secondPartArr + firstPartArr);
}

solve(["5", "15", "23", "56", "35"], 2);
