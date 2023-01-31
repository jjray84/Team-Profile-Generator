const Employee = require('./index');

class Intern extends Employee {
    constructor(school) {
        super(name, id, school);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

    printInfo() {
        console.log(`The school this intern attends is ${this.school}.`);
    }
}

Intern.printInfo();