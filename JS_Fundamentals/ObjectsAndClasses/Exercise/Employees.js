function solve(array) {
  let persons = [];

  for (let i = 0; i < array.length; i++) {
    let name = array[i];
    let personalNum = array[i].length;
    let person = {
      name: name,
      personalNum: personalNum,
    };

    persons.push(person);
  }

  for (const person of persons) {
    console.log(
      `Name: ${person.name} -- Personal Number: ${person.personalNum}`
    );
  }
}

console.log(
  solve([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
  ])
);
