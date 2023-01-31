const Employee = require('./index');

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
      return this.officeNumber;
    }

    getRole() {
      return 'Manager';
    }

    printInfo() {
        console.log(`This office number is ${this.officeNumber}.`);
    }
};


module.export = Manager;