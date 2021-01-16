function solve(number) {
  for (let i = 0; i <= number; i++) {
    let result = i.toString() + " ";
    console.log(result.repeat(i));
  }
}

solve(3);
