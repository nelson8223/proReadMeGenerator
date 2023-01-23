// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = ["Do you have a Readme File?"];
const fs = require("fs")
const inquirer = require('inquirer');
console.log("hello")
const generateMarkdown = require('./utils/generateMarkdown')


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your Project Title?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'what is Your Project Description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'what are the credits used?',
      name: 'credits',
    },
    {
        type: 'input',
        message: 'What is the instructions for the Usage?',
        name: 'usage',
},
{
    type: 'input',
    message: 'what are the steps for the Installation?',
    name: 'installation',
},

{
    type: 'input',
    message: 'what is the License used ?',
    name: 'license',
},
{
  type: 'input',
  message: 'what is your email address ?',
  name: 'emailAddress',
},

  ])
  .then((response) => {
  // console.log(response)
  init(response)
 
  });





// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init(data) {
  
  const createReadMe = generateMarkdown(data)
  console.log(createReadMe)
fs.writeFile("./utils/README.md", createReadMe, (err)=>{ 
 if (err) throw new Error('something went wrong')
} )

}

// Function call to initialize app
// init();
