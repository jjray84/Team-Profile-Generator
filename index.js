const inquirer = require('inquirer'); // Requires the use of the inquirer npm
const fs = require('fs'); // requires the use of the File System

const questions = [ // This is the initial question that will populate 
    {
        type: 'list',
        question: 'What position would you like to add?',
        options: ['Manager', 'Engineer', 'Student'],
        name: 'position',
    },
]

class Employee { // This is the class for the information from the first question
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    printInfo() {
      console.log(`This office belongs to ${this.name}.`);
      console.log(`This person's id number is ${this.id}`);
      console.log(`The users email is ${this.email}`);
    }
}

module.exports = Employee;


function generateHTML() { // This *should* create the HTML page for the cards to populate to.
    let newDiv = document.createElement('div');
    newDiv.innerHTML = "";
}