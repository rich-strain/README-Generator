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
      return '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)';
    case 'None':
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // switch statement to return the correct link based on the license paramater
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'GNU General Public License':
      return '[GNU General Public License](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache':
      return '[Apache License](https://opensource.org/licenses/Apache-2.0)';
    case 'Creative Commons License':
      return '[Creative Commons License](http://creativecommons.org/publicdomain/zero/1.0/)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Return the license section of the README based on the license paramater
  if (license !== 'None') {
    return `## License \n This project is licensed under the ${license} license. \n`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Deconstruct the data object
  const { title, description, installation, usage, contribution, test, license, github, email } = data;

  // Create Installation section
  const startCodeBlock = ' ```sh';
  const endCodeBlock = ' ``` ';
  const installSection = `${startCodeBlock} ${installation}  ${endCodeBlock}`;

  // Create License section
  const licenseSection = renderLicenseSection(data.license);
  const questions = `You can find me on Github https://github.com/${github}. \n If you have any questions, feel free to reach out to me at [${email}](mailto:${email}).`;

  return `
  # ${title} \n 
  ${renderLicenseBadge(license)} \n 
  ## Description \n
  ${description} \n
  ## Table Of Contents \n 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation \n
  ${installSection} \n
  ## Usage \n
  ${usage} \n 
  ${licenseSection} \n
  ## Contributing \n
  ${contribution} \n
  ## Tests \n 
  ${test} \n
  ## Questions \n
  ${questions}

  `;
}

module.exports = generateMarkdown;
