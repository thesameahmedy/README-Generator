// TODO: Include packages needed for this application

// We are requiring fs which is short for 'file system' in order to use the append or write file methods to create a new md file for the ReadMe
const fs = require('fs');

// We are requiring 'inquirer' which is what we installed using npm install in order to more easily create this cli interface
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
  {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of your Project?',
      validate: (answer) => { if (answer.length < 1) {
          return console.log("A valid GitHub username is required.");
      }
      return true; }
  },

  {
      type: 'input',
      message: "What is your GitHub username? ",
      name: 'githubName',
      validate: (answer) => { if (answer.length < 1) {
          return console.log("A valid GitHub username is required.");}
          return true;
      }
  },
  {
      type: 'input',
      message: "What is the name of your GitHub repo?",
      name: 'githubRepo',
      validate: function (answer) {
          if (answer.length < 1) {
              return console.log("A valid GitHub repo is required for a badge.");
          }
          return true;
      }
  },
  {
      type: 'list',
      message: "Choose a license for your project.",
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
      name: 'projectLicense'
  },
  {
      type: 'input',
      message: "Write a description of your project.",
      name: 'projectDescription',
      validate: function (answer) {
          if (answer.length < 1) {
              return console.log("A valid project description is required.");
          }
          return true;
      }
  },
  {
    type: 'input',
    name: 'projectInstallation',
    message: 'What are the guidelines for installing your project application?',
  },
  {
    type: 'input',
    name: 'projectContribution',
    message: 'What are the guidelines for contribution?',
  },
  {
    type: 'input',
    name: 'projectUsage',
    message: 'Who is allowed to use your project?',
  },
  {
      type: 'input',
      message: "Provide any tests written for your application and provide examples on how to run them.",
      name: 'projectTests'
  },
];


// function to initialize program
function init() {

  inquirer.prompt(questions) 

// TODO: Create a function to write README file
.then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile(`${answers.projectTitle}.md`, readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README File!')
    );
 } );}


const generateREADME = ({ projectTitle, githubName, githubRepo, projectDescription, projectInstallation, projectContribution, projectLicense, projectTests, projectQuestions, projectUsage}) =>
  
 ` 
 # Project Title: ${projectTitle}
 ## Github Username: ${githubName}
### Github Page ${githubRepo}



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


 // function call to initialize program
 init();

 

