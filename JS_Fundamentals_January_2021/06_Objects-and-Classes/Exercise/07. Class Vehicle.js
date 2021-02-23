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
