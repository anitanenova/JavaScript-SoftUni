function solve(string) {
  let personInfo = JSON.parse(string);

  for (let key in personInfo) {
    console.log(`${key}: ${personInfo[key]}`);
  }
}

console.log(solve('{"name": "George", "age": 40, "town": "Sofia"}'));
