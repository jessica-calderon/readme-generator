// packages needed for this application
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
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions and/or examples for use. (Required)',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('Please enter your use instructions!');
            return false;
        }
    }
},
{
  type: 'input',
  name: 'test',
  message: 'Please provide instructions on how to test the app. (Required)',
  validate: testInput => {
      if (testInput) {
          return true;
      } else {
          console.log('Please enter test instructions. Ex, "npm test"');
          return false;
      }
  }
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
    message: 'What are the steps required to install your project? (If a web application, please enter the repository or live deployed project link.)',
    validate: installInput => {
      if (installInput) {
        return true;
      } else {
        console.log('Please enter steps required to install your project!');
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'preview',
    message: 'Do you have an application preview? (image and/or link)',
    default: true
  },
  {
    type: 'input',
    name: 'previewImg',
    message: 'Please insert your preview image link or path. (Ex., ./assets/img.png)'
  },
  {
    type: 'input',
    name: 'previewLink',
    message: 'Please insert your preview demo link or path. (Ex., YouTube video link)'
  },

]

// function to write README file
const writeFile = fileInfo => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/generatedREADME.md', fileInfo, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'README file created!'
      });
    });
  });
}


// store questions info for readme
const init = () => {
  return inquirer.prompt(questionsArr)
    .then(readmeInfo => {
      return readmeInfo
    })
};
// Function call to initialize app
init()
  .then(readmeInfo => {
    console.log(readmeInfo);
    return generateMarkdown(readmeInfo);
  })
  .then(writeMD => {
    return writeFile(writeMD);
  })
  .then(response => {
    console.log(response.message);
  })
  .catch(err => {
    console.log(err);
  });