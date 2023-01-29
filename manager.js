const index = require('./index');

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    printInfo() {
        console.log(`This office number is ${this.officeNumber}.`);
    }
}

console.log('---Manager---');
Manager.printInfo();