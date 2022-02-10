// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return 
`
  # ${projectTitle}
 ## ${githubName}
### ${githubRepo}



 # Table of Contents 
 1. Description
 2. Installation
 3. Usage Guidelines
 4. Contributing
 5. Tests
 6. Questions

 ## Description
 ${projectDescription}


 ## Installation
 ${projectInstallation}

 ### Usage
 ${projectUsage}

 ### License
 ${projectLicense}


 ## Contributing
 ${projectContribution}

 #### Tests
 ${projectTests}

 ###  Questions
 ${projectQuestions}

 `
;
}


module.exports = generateMarkdown;
