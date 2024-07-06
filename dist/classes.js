"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2024;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log(`IT Department Company (${this.name})`);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid report!");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("dept2", []);
        return this.instance;
    }
    describe() {
        console.log("Most Reliable Accounting Department");
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(employee) {
        if (employee == "Max")
            return;
        else
            this.employees.push(employee);
    }
}
const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);
const itDepartment = new ITDepartment("dept1", ["Gru"]);
itDepartment.describe();
itDepartment.addEmployee("Gru");
itDepartment.printEmployeeInformation();
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.describe();
accounting.mostRecentReport = "Year End Report";
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.addReport("Employee Salary Report");
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.printEmployeeInformation();
//# sourceMappingURL=classes.js.map