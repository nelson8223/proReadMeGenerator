// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
 function renderLicenseBadge (license) {
if (license !== 'None') {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
return ''; }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  `${renderLicenseLink(data.license)}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 

  return `# ${data.title}

  ## Table of Content
  -[Description](#Description)
  -[Usage](#Usage)
  -[Installation](#Installation)
  -[Credits](#credits)
  -[License](#license)

  ## License:
  ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)


  ## Description
  ${data.Description}

  ## Usage
  ${data.Usage}

  ## Installation
  ${data.Installation}

  ## Credits
  ${data.Credits}

  ## License
  ${data.License}

  ## emailAddress
  ${data.emailAddress}

`;
}

module.exports = generateMarkdown;


