// type addFn = (a: number, b: number) => number;
// let add: addFn;
// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Max", 32);
// user1.name = "Manu"; // will be error, because field name is readonly
user1.greet("Hi there! I am");
console.log(user1);
