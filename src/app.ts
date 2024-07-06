class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
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
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting"); // calls the parent class constructor
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(employee: string): void {
    if (employee == "Max") return;
    else this.employees.push(employee);
  }
}

const itDepartment = new ITDepartment("dept1", ["Max"]);
itDepartment.printEmployeeInformation();
itDepartment.describe();

const accounting = new AccountingDepartment("dept2", []);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.addReport("Employee Salary Report");
accounting.printEmployeeInformation();
accounting.describe();
