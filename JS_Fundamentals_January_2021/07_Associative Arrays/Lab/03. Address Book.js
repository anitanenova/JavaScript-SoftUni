function solve(input) {
  let persons = {};

  let result = "";

  input.map((str) => {
    let [name, address] = str.split(":");

    persons[name] = address;
  });

  Object.keys(persons)
    .sort((a, b) => a.localeCompare(b))
    .forEach((key) => {
      result += `${key} -> ${persons[key]}\n`;
    });

  return result;
}
