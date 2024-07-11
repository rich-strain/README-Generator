//Create a function that returns a license badge based on the license paramter, an empty license will return an empty string
function renderLicenseBadge(license) {
  // switch statement will go here to return the correct badge based on the license paramater
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // switch statement will go here to return the correct link based on the license paramater
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // switch statement will go here to return the correct section based on the license paramater
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Currently Only Retuns The Title Of The Project and Section Headers
  return `# ${data.title} \n ## Description \n ## Table Of Contents \n ## Usage \n ## License \n ## Contributing \n ## Tests \n ## Questions \n `;
}

module.exports = generateMarkdown;
