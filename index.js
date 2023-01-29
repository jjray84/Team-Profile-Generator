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