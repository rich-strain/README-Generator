// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: colors.green('What is the title of your project?'),
  },
  {
    type: 'input',
    name: 'description',
    message: colors.blue('Please provide a description of your project.'),
  },
  {
    type: 'input',
    name: 'installation',
    message: colors.green('Please provide installation instructions for your project.'),
  },
  {
    type: 'input',
    name: 'usage',
    message: colors.blue('Please provide usage information for your project.'),
  },
  {
    type: 'input',
    name: 'contribution',
    message: colors.green('Please provide contribution guidelines for your project.'),
  },
  {
    type: 'input',
    name: 'test',
    message: colors.blue('Please provide test instructions for your project.'),
  },
  {
    type: 'list',
    name: 'license',
    message: colors.green('Please choose a license for your project.'),
    choices: ['MIT', 'GNU General Public License', 'Apache', 'Creative Commons License', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: colors.blue('What is your GitHub username?'),
  },
  {
    type: 'input',
    name: 'email',
    message: colors.green('What is your email address?'),
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log('Your professional README.md has been created!')));
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const generatedMarkdown = generateMarkdown(data);
    writeToFile('README.md', generatedMarkdown);
  });
}

// Function call to initialize app
init();
