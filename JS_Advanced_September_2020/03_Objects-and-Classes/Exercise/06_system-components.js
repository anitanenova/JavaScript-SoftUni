function solve(input) {
  let result = {};

  for (const line of input) {
    let [systemName, componentName, subcomponentName] = line.split(" | ");

    if (!result[systemName]) {
      result[systemName] = {};
    }

    if (!result[systemName][componentName]) {
      result[systemName][componentName] = [];
    }

    result[systemName][componentName].push(subcomponentName);
  }

  Object.entries(result)
    .sort((curr, next) => {
      return (
        Object.entries(next[1]).length - Object.entries(curr[1]).length ||
        curr[0].localeCompare(next[0])
      );
    })
    .forEach(([systemName, componentName]) => {
      console.log(systemName);

      Object.entries(componentName)
        .sort((curr, next) => {
          return next[1].length - curr[1].length;
        })
        .forEach(([component, subcomponentName]) => {
          console.log(`|||${component}`);
          subcomponentName.forEach((sub) => {
            console.log(`||||||${sub}`);
          });
        });
    });
}

solve([
  "SULS | Main Site | Home Page",
  "SULS | Main Site | Login Page",
  "SULS | Main Site | Register Page",
  "SULS | Judge Site | Login Page",
  "SULS | Judge Site | Submittion Page",
  "Lambda | CoreA | A23",
  "SULS | Digital Site | Login Page",
  "Lambda | CoreB | B24",
  "Lambda | CoreA | A24",
  "Lambda | CoreA | A25",
  "Lambda | CoreC | C4",
  "Indice | Session | Default Storage",
  "Indice | Session | Default Security",
]);
