class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
}

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }
}

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
}