// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return "[![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    else if (license ==="Apache 2.0") {
      return "[![license](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)]";
    }
    else if (license === "GPL 3.0") {
      return "[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    }
    else if (license === "BSD 3") {
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)]";
    }
    else {
      return "";
    }
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  }
  else if (license === "APACHE 2.0") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  }
  else if (license === "GPL 3.0") {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  }
  else if (license === "BSD 3") {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  }
  else{
    return "";
  }

  ## licenseCopyright 9c0 2021 Mahdi Moussa. Licensed under the {license} license 
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}

  ## Table of Contents
  - [Link](#link)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributors](#contributors)
  - [Questions](#questions)
  - [License](#license)
  
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribution}
`;
}

module.exports = generateMarkdown;
