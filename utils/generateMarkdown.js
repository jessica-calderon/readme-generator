

// Function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}
    ## Table-of-Contents
    * [Description](#description)
    * [Built With](#languages)
    * [Installation](#installation)
    * [License](#license)
    * [Contributing](#contributing)
    * [Questions](#questions)
    
    ## [Description](#table-of-contents)
    ${data.description}

    ## [Built With](#table-of-contents)
    ${data.languages}

    ## [License](#table-of-contents)

    ## [Contributing](#table-of-contents)

    ## [Installation](#table-of-contents)
    ${data.install}

    ## [Questions](#table-of-contents)
    Questions? Please contact me at the following links: 
    [GitHub](https://github.com/${data.github})
    [Email: ${data.email}](mailto${data.email})
    `;
}