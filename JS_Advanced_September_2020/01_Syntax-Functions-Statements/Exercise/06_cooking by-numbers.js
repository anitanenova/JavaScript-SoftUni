function solve(input) {
  let num = input.splice(0, 1);

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "chop") {
      num = num / 2;
      console.log(num);
    } else if (input[i] === "dice") {
      num = Math.sqrt(num);
      console.log(num);
    } else if (input[i] === "spice") {
      num += 1;
      console.log(num);
    } else if (input[i] === "bake") {
      num *= 3;
      console.log(num);
    } else if (input[i] === "fillet") {
      num = num * 0.8;
      console.log(num);
    }
  }
}

solve(["9", "dice", "spice", "chop", "bake", "fillet"]);
