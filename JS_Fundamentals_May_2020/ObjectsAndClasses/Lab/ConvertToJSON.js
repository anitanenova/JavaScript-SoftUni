function solve(name, lastName, hairColor) {
  let personInfo = {
    name: name,
    lastName: lastName,
    hairColor: hairColor,
  };

  let result = JSON.stringify(personInfo);

  return result;
}

console.log(solve("George", "Jones", "Brown"));
