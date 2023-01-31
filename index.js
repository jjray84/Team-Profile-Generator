const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern')

function createManager() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the name of the Manager?',
      name: 'managerName'
    },
    {
      type: 'input',
      message: 'What is the ID number for the Manager?',
      name: 'id'
    },
    {
      type: 'input',
      message: 'What is the email address for the manager?',
      name: 'email'
    },
    {
      type: 'input',
      message: 'What is the managers office number?',
      name: 'number'
    }  
  ])
};

function generateManager(emp) {
  let HTML = `<main>
  <div class="container row text-center">
  <div class="col-3 m-4">
    <div class="p-2 card text-bg-primary m-5" style="max-width: 18rem;">
      <div class="card-header" id="header"><p id="name">${managerName}</p><p id="position">Manager</p></div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="IDNumber">${id}</li>
          <li class="list-group-item" id="email">${email}</li>
          <li class="list-group-item" id="various">${number}</li>
        </ul>
      </div>
    </div>
  </div>
</main>`
};

function createEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the name of the Engineer?',
      name: 'engineerName'
    },
    {
      type: 'input',
      message: 'What is the ID number for the Engineer?',
      name: 'id'
    },
    {
      type: 'input',
      message: 'What is the email address for the engineer?',
      name: 'email'
    },
    {
      type: 'input',
      message: 'What is the engineers GitHub account name?',
      name: 'github'
    }
  ])  
};

function generateEngineer(emp) {
  let HTML = `<main>
  <div class="container row text-center">
  <div class="col-3 m-4">
    <div class="p-2 card text-bg-primary m-5" style="max-width: 18rem;">
      <div class="card-header" id="header"><p id="name">${engineerName}</p><p id="position">Manager</p></div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="IDNumber">${id}</li>
          <li class="list-group-item" id="email">${email}</li>
          <li class="list-group-item" id="various">${github}</li>
        </ul>
      </div>
    </div>
  </div>
</main>`
};

function generateHTML() {
  let HTML = 
  `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>This is for creating the HTML element</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>
    <body>`
    Employees.forEach(emp => {
      switch(emp.getRole()) {
        case 'Manager':
          html += generateManager(emp);
          break;
        case 'Engineer':
          html += generateEngineer(emp);
          break;
        case 'Intern':
          html += generateIntern(emp);
          break;    
      }
      `</body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  </body>
</html>` 
    })
};

function end() {
  generateHTML();
}

module.exports = Employee;

function init() {
  inquirer.prompt(questions).then(data => {
    const input = '';
  })

  fs.writeFile(userInput, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Success!');
    }
  })
}  

init();