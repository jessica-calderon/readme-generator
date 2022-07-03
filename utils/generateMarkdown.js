// license logic
// license badge
function licenseBadge(license) {
    if (license !== 'no license') {
        return `
    ![badge](https://img.shields.io/badge/license-${license}-blue)
      `;
        // empty string if no license 
    } else {
        return ' ';
    }
}
// license link
function licenseLink(license) {
    if (license !== 'no license') {
        return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
        return ' ';
    }
}
// table of contents license header
function tocLicense(license) {
    if (license !== 'no license') {
    return `
    * [License](#license)
      `;
    } else {
      return ' ';
    }
   }
   // license section
   function licenseSection(license) {
    if (license !== 'no license') {
    return `
## [License](#table-of-contents)
The application is covered under the following license: <br>${licenseLink(license)}
      `;
    } else {
      return ' ';
    }
   }
  
// if user chooses no contributors
function contributeSection(contributors, data) {
    if (!contributors) {
      return `
Thank you for your interest in contributing to this project, however, I am currently not accepting third party contributions.
      `;
    } else {
      return `
    ${data}
      `;
    }
  }
// Function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}
## Table-of-Contents
* [Description](#description)
* [Built With](#languages)
* [Installation](#installation)
* [Contributing](#contributing)
* [Usage](#usage)
* [Testing](#tests)
* [Questions](#questions)
${licenseBadge(data.license)} 

## [Description](#table-of-contents)
${data.description}

## [Languages](#table-of-contents)
${data.languages}

${licenseSection(data.license)}

## [Usage](#table-of-contents)
${data.usage}

## [Testing](#table-of-contents)
${data.test}

## [Contributing](#table-of-contents)
${contributeSection(data.contributors, data.contribute)}

## [Installation](#table-of-contents)
${data.install}

## [Questions](#table-of-contents)
Questions? Please contact me at the following links: <br>
[GitHub](https://github.com/${data.github}) <br>
[Email: ${data.email}](mailto:${data.email})
`;
}
module.exports = generateMarkdown;
