function solve(firstName, lastName, age) {
  let person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
}

console.log(solve("Peter", "Pan", "20"));
