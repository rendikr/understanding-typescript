type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// The & symbol indicates an intersection types
type ElevatedEmployee = Admin & Employee;

const employee1: ElevatedEmployee = {
  name: "Max",
  privileges: ["add-service"],
  startDate: new Date(),
};

type Combinable = string | number;

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    // this is called type guards
    return a.toString() + b.toString();
  }
  return a + b;
}

const resultString = add("Max", " Stephen");
resultString.split(" ");
const resultNumber = add(5.0095, 6);
resultNumber.toFixed(2);

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My Own Company" },
};

console.log(fetchedUserData?.job?.title);

const userInput = null;

const storedDataOne = userInput || "DEFAULT"; // If userInput is truthy (not null, not undefined, not "", not 0, and not false), it returns the value of userInput. If userInput is falsy (including null or an empty string ""), it returns the right-hand side ("DEFAULT")
const storedDataTwo = userInput ?? "DEFAULT"; // If userInput is null or undefined, it returns the right-hand side ("DEFAULT"). If userInput is any other value (including an empty string ""), it returns the value of userInput

type Numeric = number | boolean;
type Universal = Combinable & Numeric;
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(employee: UnknownEmployee) {
  console.log(`Name: ${employee.name}`);
  if ("privileges" in employee) {
    // check if "privileges" property is exists in employee
    console.log(`Privileges: ` + employee.privileges);
  }
  if ("startDate" in employee) {
    // check if "privileges" property is exists in employee
    console.log(`Start Date: ` + employee.startDate);
  }
}

console.log(employee1);
printEmployeeInformation(employee1);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  category: "bird";
  flyingSpeed: number;
}

interface Horse {
  category: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.category) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;

    default:
      break;
  }
  console.log("Moving with speed: " + speed);
}

moveAnimal({ category: "bird", flyingSpeed: 10 });
moveAnimal({ category: "horse", runningSpeed: 20 });

// BOTH ARE TWO WAYS OF TYPE CASTING
const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")!
);
const userInputElement2 = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement2.value = "Hi!";

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};
