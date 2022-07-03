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
// table of contents license badge 
function license1(license) {
    if (license !== 'no license') {
        return `
    * [License](#license)
      `;
        // empty if none 
    } else {
        return ' ';
    }
}
// license section 
function license2(license) {
    if (license !== 'no license') {
        return `
    ## [License](#table-of-contents)
    This application is covered under the following license:
    ${licenseLink(license)}
      `;
        // empty string if none 
    } else {
        return ' ';
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
    ${license1(data.license)}    
    * [Contributing](#contributing)
    * [Questions](#questions)
    
    ## [Description](#table-of-contents)
    ${data.description}

    ## [Built With](#table-of-contents)
    ${data.languages}

    ${license2(data.license)}

    ## [Contributing](#table-of-contents)

    ## [Installation](#table-of-contents)
    ${data.install}

    ## [Questions](#table-of-contents)
    Questions? Please contact me at the following links: 
    [GitHub](https://github.com/${data.github})
    [Email: ${data.email}](mailto${data.email})
    `;
}
module.exports = generateMarkdown;