function solve(arr) {
  let result = "";
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      return `${this.name}, age ${this.age} says Meow`;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let [name, age] = arr[i].split(" ");

    let currentCat = new Cat(name, age);
    result += `${currentCat.meow()}\n`;
  }

  return result;
}

console.log(solve(["Mel 2", "Tom 5"]));
