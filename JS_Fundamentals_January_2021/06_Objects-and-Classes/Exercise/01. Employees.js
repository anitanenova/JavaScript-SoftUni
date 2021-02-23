function solve(arr) {
  class Person {
    constructor(name, personalNumber) {
      this.name = name;
      this.personalNumber = personalNumber;
    }
  }

  let result = "";

  for (let i = 0; i < arr.length; i++) {
    let currentPerson = new Person(arr[i], arr[i].length);

    result += `Name: ${currentPerson.name} -- Personal Number: ${currentPerson.personalNumber}\n`;
  }

  return result;
}
