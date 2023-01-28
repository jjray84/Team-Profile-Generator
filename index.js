const inquirer = require('inquirer');
const fs = require('fs');
const questions = [
    {
        type: 'list',
        question: 'What position would you like to add?',
        name: 'position',
    },
]