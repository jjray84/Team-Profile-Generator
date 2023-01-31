const Employee = require('./index');

class Engineer extends Employee {
    constructor(github) {
        super(name, id, github);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }

    printInfo() {
        console.log(`The github for this engineer is ${this.github}.`);
    }
}

module.export = Engineer;