function solve(input) {
  let str = input.toString();
  let strArr = str.split("");
  let result = true;
  let sum = 0;

  for (let i = 0; i < strArr.length; i++) {
    let present = strArr[i];
    let future = strArr[i + 1];
    sum += Number(present);
    if (present != future && i + 1 != strArr.length) {
      result = false;
    }
  }

  console.log(result);
  console.log(sum);
}

console.log(solve(1234));
