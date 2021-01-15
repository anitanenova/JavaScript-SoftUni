function solve(input) {
  let companies = {};
  for (const line of input) {
    let [companyName, userId] = line.split(" -> ");

    if (companies.hasOwnProperty(companyName)) {
      companies[companyName].add(userId);
    } else {
      companies[companyName] = new Set();
      companies[companyName].add(userId);
    }
  }

  let sorted = Object.entries(companies).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const kvp of sorted) {
    console.log(`${kvp[0]}`);
    kvp[1].forEach((x) => console.log(`-- ${x}`));
  }
}

console.log(
  solve([
    "SoftUni -> AA12345",
    "SoftUni -> BB12345",
    "Microsoft -> CC12345",
    "HP -> BB12345",
  ])
);
