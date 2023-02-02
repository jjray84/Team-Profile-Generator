const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

const listOfEmp = [];
const saveFolder = path.resolve(__dirname, 'dist');
const savePath = path.join(saveFolder, 'index.html');


function menu() { // This populates a menu for the user to choose what type of employee to add.
  inquirer.prompt([
    {
      type: 'list',
      message: 'What employee would you like to add?',
      choices: ['Manager', 'Engineer', 'Intern', 'None'],
      name: 'employee'
    }

  ]).then(userInput => {
    if(userInput.employee == 'Manager') { 
      createManager(); // This will call upon the function createManager
    } else if (userInput.employee == 'Engineer'){
        createEngineer(); // This will call upon the function createEngineer
    } else if (userInput.employee == 'Intern') {
      createIntern(); // This will call upon the function createInter
    } else {
      end(); // This will call upon the function end
    }
  })
}

function createManager() {
  inquirer.prompt([ // This will show each of the following questions one at a time for the user to input information into.
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
      name: 'officeNumber'
    }  
  ]).then(userInput => {
    const newManager = new Manager(userInput.managerName, userInput.id, userInput.email, userInput.officeNumber);
    listOfEmp.push(newManager); // This will take the information the User input and push it to the array listOfEmp
    menu();
  })
};

function generateManager(emp) { // This function is creating the card for Manager.
  return `
  <div class="col-3">
    <div class="p-2 card text-bg-primary" style="max-width: 18rem;">
      <div class="card-header" id="header"><p id="name">${emp.getName()}</p><p id="position">Manager</p></div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="IDNumber">${emp.getId()}</li>
          <li class="list-group-item" id="email">${emp.getEmail()}</li>
          <li class="list-group-item" id="various">${emp.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
  </div>  
  `
};

function createEngineer() {
  inquirer.prompt([ // This will show each of the following questions one at a time for the user to input information into.
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
  ]).then(userInput => {
    const newEngineer = new Engineer(userInput.engineerName, userInput.id, userInput.email, userInput.github);
    listOfEmp.push(newEngineer); // This will take the information the User input and push it to the array listOfEmp
    menu();
  })  
};

function generateEngineer(emp) { // This function is creating a card for an Engineer
  return `
  <div class="col-3">
    <div class="p-2 card text-bg-primary" style="max-width: 18rem;">
      <div class="card-header" id="header"><p id="name">${emp.getName()}</p><p id="position">Engineer</p></div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="IDNumber">${emp.getId()}</li>
          <li class="list-group-item" id="email">${emp.getEmail()}</li>
          <li class="list-group-item" id="various"><a href="https://www.github.com/${emp.getGithub()}">GitHub</a></li>
        </ul>
      </div>
    </div>
  </div>  
  `
};

function createIntern() {
  inquirer.prompt([ // This will show each of the following questions one at a time for the user to input information into.
    {
      type: 'input',
      message: 'What is the name of the intern?',
      name: 'internName'
    },
    {
      type: 'input',
      message: 'What is the ID number for the intern?',
      name: 'id'
    },
    {
      type: 'input',
      message: 'What is the email address for the intern?',
      name: 'email'
    },
    {
      type: 'input',
      message: 'What school does the intern attend?',
      name: 'school'
    }
  ]).then(userInput => {
    const newIntern = new Intern(userInput.internName, userInput.id, userInput.email, userInput.school);
    listOfEmp.push(newIntern); // This will take the information the User input and push it to the array listOfEmp
    menu();
  })
};

function generateIntern(emp) { // This is creating a card for the Intern
  return `
  <div class="col-3">
    <div class="p-2 card text-bg-primary" style="max-width: 18rem;">
      <div class="card-header" id="header"><p id="name">${emp.getName()}</p><p id="position">Intern</p></div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="IDNumber">${emp.getId()}</li>
          <li class="list-group-item" id="email">${emp.getEmail()}</li>
          <li class="list-group-item" id="various">${emp.getSchool()}</li>
        </ul>
      </div>
    </div>
  </div>  `
}

function generateHTML() { // This is creating the HTML page
  let html = 
  `<!doctype html>
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
  <main>
    <div class="container text-center">
    <div class="row">
  `

    listOfEmp.forEach(emp => { // This iterates through the listOfEmp array
      switch(emp.getRole()) {
        case 'Manager':
          html +=  generateManager(emp); // This calls the function generateManager to run for each Manager created prior
          break;
        case 'Engineer':
          html += generateEngineer(emp); // This calls the function generateEngineer to run for each Engineer created prior
          break;
        case 'Intern':
          html += generateIntern(emp); // This calls the function generateIntern to run for each Intern created prior.
          break;  
      }
    })

    html +=  `</div>
    </div>
    </main>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  </body>
</html>` 
fs.writeFileSync(savePath, html)   
};

function end() { // This function ends the menu and calls upon generateHTML to run.
  generateHTML();
}

menu(); // This starts the entire process when the user runs the command node index.js in the terminal