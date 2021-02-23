function convert(jsonStr) {
  const obj = JSON.parse(jsonStr);

  let result = "";

  for (const key in obj) {
    result += `${key}: ${obj[key]}\n`;
  }

  return result;
}

console.log(convert('{"name": "George", "age": 40, "town": "Sofia"}'));
