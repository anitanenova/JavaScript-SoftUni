function solve(array) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let cats = [];

  for (let i = 0; i < array.length; i++) {
    //another decision
    // let [name, ageText] = array[i].split(" ");
    // let cat = new Cat(name, Number(ageText));

    let catInfo = array[i].split(" ");
    let cat = new Cat(catInfo[0], Number(catInfo[1]));
    cats.push(cat);
  }

  for (const cat of cats) {
    cat.meow();
  }
}

console.log(solve(["Mellow 2", "Tom 5"]));
