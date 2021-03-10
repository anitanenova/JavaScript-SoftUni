function solve(input) {
  let countries = {};

  input.map((str) => {
    let [country, town, travelCost] = str.split(" > ");
    travelCost = Number(travelCost);

    if (countries.hasOwnProperty(country)) {
      let test = countries[country][town];
      if (countries[country].hasOwnProperty(town)) {
        if (test > travelCost) {
          countries[country][town] = travelCost;
        }
      } else {
        countries[country][town] = travelCost;
      }
    } else {
      countries[country] = {};
      countries[country][town] = travelCost;
    }
  });

  let result = "";

  Object.keys(countries)
    .sort((a, b) => {
      return a.localeCompare(b);
    })
    .forEach((country) => {
      result += `\n${country} -> `;

      Object.keys(countries[country])
        .sort((a, b) => {
          return countries[country][a] - countries[country][b];
        })
        .forEach((town) => {
          result += `${town} -> ${countries[country][town]} `;
        });
    });

  return result;
}
