// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown";
// TODO: Create an array of questions for user input
const questions = [
  title,
  description,
  installation,
  usage,
  contribution,
  test,
  license(list),
  github,
  email,
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeToFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  // Greet User
  // offer option to name readme something other than read me
  // call inquirer for question
  inquirer.prompt(questions).then((answers) => {
    writeToFile(fileName, generateMarkdown(response));
  });
  // confirm selections
  // call generateMarkdown on response
  // writeToFile(fileName, generateMarkdown(response));
  // log success/error
}

// Function call to initialize app
init();
