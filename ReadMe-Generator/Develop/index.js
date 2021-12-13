// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const generateMark = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input'
        name: 'title',
        message: 'What is your title?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Pleaase enter your Github Username?');
                return false;

            }
        }
    },

    // user email
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        vaildate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address?');
                return false;
            }
        }
    }

    // project title 
    {
        type: 'input',
        name: 'projectitle',
        message: 'What is your project title',
        vaildate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter a project title?');
                return false;
            }
        }
    }

    // project description 
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project?',
        vaildate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of the project?');
                return false;
            }
        }
    }

   // table of contents
   {
        type: 'confirm',
        name: 'confirmContents',
        message: 'Would you like to have a table of contents?',
    },

    //installation
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for this project?',
        default: 'installation instructions'
    }

   {
        type: 'input',
        name: 'confirmContribution',
        message: 'what are the contibution guidelines for the project?',
        default: false,
    },

    {
        type: 'input',
        name: 'test',
        message: 'what are the test instructions for the project?',
    }

   {
        type: 'type',
        name: 'test',
        message: "provide details on how application can be tested"
    }

   {
        type: 'list',
        name: 'license',
        message: 'which license do you want the project to use?',
        choices: ['apache 2.0', 'grpl 3.0', 'bsd 3', 'mit',]
       vaildate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log(please select a license of your project');
              return false;

            }
        }
    },





    // TODO: Create a function to write README file
    function writeToFile(fileName, data) {
        return new promise((resolve, reject) => {
            fs.writeFile("README.md", data, (err) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve({
                    ok: true,
                    message: "README created",
                });
            };
        };
    };

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
function init() {
    promptUser()
        .then(answers => {
            console.log(answers);
            return generateMarkdown(answers);
        })
        .then(markdown => {
            writetoFile(".dist/README.md", markdown);
            console.log('New README created');
        })
        .catch(err => {
            console.log(err);
        });
};