// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `
    * [License](#License)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License:
  
  This project is licensed under the ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}  

  ${renderLicenseBadge(data.license)}

  ## About

  ## Table of Contents
  
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributions](#Contributions)
  * [Testing](#Testing)
  * [Credits](#Credits) ${renderLicenseLink(data.license)}
  * [Contact](#Contact)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributions

  ${data.contributions}

  ## Testing

  ${data.tests}

  ## Credits

  ${data.credits}

  ${data.license !== "none" ? renderLicenseSection(data.license) : ""}

  ## Contact

  You can view my GitHub profile at [github.com/${
    data.github
  }](https://github.com/${data.github})

  If you have any questions, comments, or suggestions you can send email to <${
    data.email
  }>.

`;
}
export default generateMarkdown;
