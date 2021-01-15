function solve(nname, narea, npopulation, ncountry, npostCode) {
  let city = {
    name: nname,
    area: narea,
    population: npopulation,
    country: ncountry,
    postCode: npostCode,
  };

  for (const key in city) {
    console.log(`${key} -> ${city[key]}`);
  }
}

console.log(solve("Sofia", " 492", "1238438", "Bulgaria", "1000"));
