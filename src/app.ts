class Department {
  static fiscalYear = 2024;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  describe() {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT"); // calls the parent class constructor
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport(): string {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid report!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting"); // calls the parent class constructor
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(employee: string): void {
    if (employee == "Max") return;
    else this.employees.push(employee);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const itDepartment = new ITDepartment("dept1", ["Gru"]);
itDepartment.describe();
itDepartment.addEmployee("Gru");
itDepartment.printEmployeeInformation();

const accounting = new AccountingDepartment("dept2", []);
accounting.describe();
accounting.mostRecentReport = "Year End Report";
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.addReport("Employee Salary Report");
console.log(accounting.mostRecentReport); // to access a getter, no need to use parenthesis
accounting.printReports();
accounting.printEmployeeInformation();
