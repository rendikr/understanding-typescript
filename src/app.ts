interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number = 32) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Max");
user1.greet("Hi there! I am");
console.log(user1);
