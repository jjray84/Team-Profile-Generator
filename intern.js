const Employee = require('./index');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }

    printInfo() {
        console.log(`The school this intern attends is ${this.school}.`);
    }
}

Intern.printInfo();