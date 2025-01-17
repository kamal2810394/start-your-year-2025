class Person {
  public age: number;
  public name: {
    first: string;
    last: string;
    updateFirstName: Function;
  };
  constructor(age: number, firstName: string, lastName: string) {
    this.age = age;
    this.name = {
      first: firstName,
      last: lastName,
      updateFirstName: (x: string) => {
        this.name.first = x;
      },
    };
  }
}

let person = new Person(20, "John", "River");
console.log(person);
person.name.updateFirstName("Jonathan");
console.log(person);
console.log(typeof person);
