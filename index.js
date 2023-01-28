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
}
 function generateHTML() { // This *should* create the HTML page for the cards to populate to.
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>This is for creating the HTML element</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      </head>
      <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
          <div class="container-fluid m-3">
            <a class="navbar-brand">
              <p class="text-light fs-1 p-3">My Team</p>
            </a>
          </div>
        </nav>
        </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
      </body>
    </html>
    `
 }