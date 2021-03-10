function solve(input) {
  let list = new Set();
  let listVip = [];
  let listRegular = [];
  for (const line of input) {
    if (list.has(line)) {
      list.delete(line);
    } else if (line == "PARTY") {
      continue;
    } else {
      list.add(line);
    }
  }

  for (const guest of list) {
    if (parseInt(guest[0])) {
      listVip.push(guest);
    } else {
      listRegular.push(guest);
    }
  }

  let result = "";

  result += `${Array.from(list).length}\n`;
  listVip.forEach((x) => (result += `${x}\n`));
  listRegular.forEach((x) => (result += `${x}\n`));

  return result;
}
