class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const regex = /\w \w/;
    if (regex.test(value)) {
      let [firstName, lastName] = value.split(" ");

      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
}

let person = new Person("aaa", "bbb");

person.fullName = "dfsc dcs";
console.log(person);
