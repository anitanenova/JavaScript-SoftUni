function solve(number) {
  function createStars(number = 5) {
    for (let i = 1; i <= number; i++) {
      console.log("* ".repeat(number));
    }
  }

  createStars(number);
}

solve(4);
