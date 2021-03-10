function solve(input) {
  let persons = {};

  input.map((str) => {
    let [name, phone] = str.split(" ");

    persons[name] = phone;
  });

  let result = "";

  Object.keys(persons).forEach((key) => {
    result += `${key} -> ${persons[key]}\n`;
  });

  return result;
}
