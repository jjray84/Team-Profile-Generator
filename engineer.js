const Employee = require('./index');

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }

    printInfo() {
        console.log(`The github for this engineer is ${this.github}.`);
    }
}

Engineer.printInfo();