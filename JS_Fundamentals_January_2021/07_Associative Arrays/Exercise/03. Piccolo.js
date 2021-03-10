function solve(input) {
  let cars = [];
  let result = "";
  input.map((str) => {
    let [direction, carNumber] = str.split(", ");

    if (direction === "IN" && !cars.includes(carNumber)) {
      cars.push(carNumber);
    } else if (direction === "OUT" && cars.includes(carNumber)) {
      cars.splice(cars.indexOf(carNumber), 1);
    }
  });

  if (cars.length === 0) {
    result = "Parking Lot is Empty";
  } else {
    cars.sort((a, b) => {
      return a.localeCompare(b);
    });

    cars.map((car) => {
      result += `${car}\n`;
    });
  }

  return result;
}
