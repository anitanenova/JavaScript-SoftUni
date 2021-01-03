function solve() {
  class Vehicle {
    constructor(type, model, parts, fuel) {
      this.type = type;
      this.model = model;
      this.parts = {
        engine: Number(parts.engine),
        power: Number(parts.power),
        quality: parts.engine * parts.power,
      };
      this.fuel = Number(fuel);
      this.drive = function (fuelLoss) {
        return (this.fuel -= fuelLoss);
      };
    }
  }

  // input
  let parts = { engine: 6, power: 100 };
  let vehicle = new Vehicle("a", "b", parts, 200);
  vehicle.drive(100);
  console.log(vehicle.fuel);
  console.log(vehicle.parts.quality);

  // end input
}

console.log(solve());
