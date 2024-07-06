type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const employee1: ElevatedEmployee = {
  name: "Max",
  privileges: ["add-service"],
  startDate: new Date(),
};

console.log(employee1);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
