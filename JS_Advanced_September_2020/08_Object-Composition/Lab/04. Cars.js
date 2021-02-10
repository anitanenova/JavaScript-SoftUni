function solve(input) {
  const carFactoryBuilder = function () {
    let cars = {};

    return {
      create: (name, inherit, parentName) =>
        (cars[name] = inherit ? Object.create(cars[parentName]) : {}),

      set: (name, key, value) => (cars[name][key] = value),
      print: (name) => {
        let result = [];

        for (const key in cars[name]) {
          result.push(`${key}:${cars[name][key]}`);
        }

        console.log(result.join(", "));
      },
    };
  };

  let carFactory = carFactoryBuilder();

  input
    .map((x) => x.split(" "))
    .forEach(([command, ...args]) => carFactory[command](...args));
}
