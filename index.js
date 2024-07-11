// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project.',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please provide contribution guidelines for your project.',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please provide test instructions for your project.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project.',
    choices: ['MIT', 'GPLv3', 'Apache', 'BSD', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
  });
}

// Function call to initialize app
init();
