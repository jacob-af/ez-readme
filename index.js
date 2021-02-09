// Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./assets/utils/generateMarkdown.js";

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a brief description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide instructions for installation:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions for usage:",
  },
  {
    type: "input",
    name: "contributions",
    message: "Provide instruction for outside contribution:",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide information about testing:",
  },
  {
    type: "input",
    name: "credits",
    message: "Provide credit for anyone working on this project:",
  },
  {
    type: "list",
    message: "Is this software under any license?",
    name: "license",
    choices: ["none", "MIT", "GPL", "Apache", "BSD", "ISC"],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email Address:",
  },
];

//
const inquiry = async (questions) => {
  let answer = await inquirer.prompt(questions);
  console.log(answer);
  let confirm = await inquirer.prompt([
    {
      type: "confirm",
      name: "confirmation",
      message: "Are these entries satifactory?",
    },
  ]);
  if (confirm.confirmation) {
    return answer;
  } else {
    return inquirer.prompt(questions);
  }
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    err ? console.log(err) : console.log("Readme Successfully Created");
  });
}

// TODO: Create a function to initialize app
const init = async () => {
  let fileName = "sampleREADME.md";
  // Greet User
  console.log(
    "Thank you for choosing EZ-Readme to create your sampleREADME.md"
  );
  try {
    let answers = await inquiry(questions);
    writeToFile(fileName, answers);
    console.log("Thank you for using EZ-Readme");
  } catch (err) {
    (err) => console.log(err);
  }
};

// Function call to initialize app
init();
