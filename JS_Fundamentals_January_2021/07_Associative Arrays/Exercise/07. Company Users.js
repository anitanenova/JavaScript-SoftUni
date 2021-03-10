function solve(input) {
  let companies = {};

  input.map((str) => {
    let [company, employee] = str.split(" -> ");

    if (companies.hasOwnProperty(company)) {
      if (!companies[company].includes(employee)) {
        companies[company].push(employee);
      }
    } else {
      companies[company] = [employee];
    }
  });

  let result = "";

  Object.keys(companies)
    .sort((a, b) => {
      return a.localeCompare(b);
    })
    .forEach((company) => {
      result += `${company}\n`;

      companies[company].map((employee) => {
        result += `-- ${employee}\n`;
      });
    });

  return result;
}
