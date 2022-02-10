// TODO: Include packages needed for this application

// We are requiring fs which is short for 'file system' in order to use the append or write file methods to create a new md file for the ReadMe
const fs = require('fs');

// We are requiring 'inquirer' which is what we installed using npm install in order to more easily create this cli interface
const inquirer = require('inquirer');




// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of your Project?',
    },
// WHEN I enter my project title
// THEN this is displayed as the title of the README 

    {
      type: 'input',
      name: 'projectDescription',
      message: 'Describe your project',
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
  ])



// TODO: Create a function to write README file
.then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile(`${answers.projectTitle}.md`, readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README File!')
    );
  });




const generateREADME = ({ projectTitle, projectDescription, projectInstallation, projectContribution, projectUsage}) =>
  
 ` 
 ${projectTitle}

 # Table of Contents 

 ## Description
 ${projectDescription}

 ## Installation
 ${projectInstallation}

 ### Usage
 ${projectUsage};
 ### License

 ## Contributing
 ${projectContribution}


 #### Tests

 ###  Questions`
 
 

 ;







  // Name is how you store it
  // Validate with Validate the answers


  //Write a function to give you the html output



