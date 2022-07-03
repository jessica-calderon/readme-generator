// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const { inherits } = require('util');

// questions array 
const questionsArr = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username? (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email address!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter the title of your project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a short description of your project. (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter a description of your project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'languages',
    message: 'What languages did you use to build this project?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license does your project have?',
    choices: ['agpl', 'Apache', 'MIT', 'No license']
   },
   {
    type: 'confirm',
    name: 'contributors',
    message: 'Do you want to allow other developers to contribute?',
    default: true
   },
   {
    type: 'input',
    name: 'contribute',
    message: 'Please provide contribution guidelines. (Required)',
    when: ({ contribute }) => {
      if (contribute) {
          return true;
      } else {
          return false;
      }
  },
  validate: contributorInput => {
      if (contributorInput) {
          return true;
      } else {
          console.log("Please enter your project's contributor guidelines!");
          return false;
      }
  }
},  
{
  type: 'input',
  name: 'install',
  message: 'What are the steps required to install your project?',
  validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          console.log('Please enter steps required to install your project!');
          return false; 
      }
  }
},

]

// TODO: Create an array of questions for user input
/* const questions = []; */

// TODO: Create a function to write README file
/* function writeToFile(fileName, data) {} */

// TODO: Create a function to initialize app
/* function init() {} */

// Function call to initialize app
/* init(); */
const init = () => {
  return inquirer.prompt(questionsArr)
  .then(readmeInfo => {
    return readmeInfo
  })
};
init()
.then(readmeInfo => {
  console.log(readmeInfo);
  return generateMarkdown(readmeInfo);
});