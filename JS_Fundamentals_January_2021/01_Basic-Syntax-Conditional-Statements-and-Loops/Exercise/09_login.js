function solve(input) {
  let username = input.splice(0, 1).toString();
  let reversedUsername = username.split("").reverse().join("");

  for (let i = 0; i < input.length; i++) {
    if (i != 3) {
      if (input[i] == reversedUsername) {
        console.log(`User ${username} logged in.`);
      } else {
        console.log("Incorrect password. Try again.");
      }
    } else {
      console.log(`User ${username} blocked!`);
    }
  }
}

solve(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
