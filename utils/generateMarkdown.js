//Create a function that returns a license badge based on the license paramter, an empty license will return an empty string
function renderLicenseBadge(license) {
  // create switch statement to return the correct badge based on the license paramater
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GNU General Public License':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Creative Commons License':
      return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'None':
      return 'LICENSE: NONE';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // switch statement will go here to return the correct link based on the license paramater
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
  return `# ${data.title} \n ${renderLicenseBadge(data.license)} \n ## Description \n ## Table Of Contents \n ## Usage \n 
  ## License \n ## Contributing \n ## Tests \n ## Questions \n `;
}

module.exports = generateMarkdown;
