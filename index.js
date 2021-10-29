// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const content = require("./src/generate-html.js");
// Array of questions for user input
const questions = {
  type: "loop",
  name: "employee",
  message: "Add an employee?",
  questions: [
    {
      name: "role",
      message: "What type of employee would you like to add?",
      type: "list",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      name: "name",
      message: "Enter their full name:",
      type: "input",
    },
    {
      name: "id",
      message: "Enter their employee id:",
      type: "input",
    },
    {
      name: "email",
      message: "Enter their email:",
      type: "input",
    },
    {
      name: "github",
      when: (input) => input.role === "Engineer",
      message: "Enter their github user name",
      type: "input",
    },
    {
      name: "phone",
      when: (input) => input.role === "Manager",
      message: "Enter their office phone number:",
      type: "input",
    },
    {
      name: "school",
      when: (input) => input.role === "Intern",
      message: "Enter the school they graduated from:",
      type: "input",
    },
  ],
};
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
inquirer.prompt(questions).then((data) => {
  console.log(data);
});
// Write README file
// function writeToFile(filename, data) {
//   fs.writeFile(`${filename}.md`, data, (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log("File successfully generated = README.md");
//   });
// }

// Initialize app - run inquirer
// function init() {
//   var prompt = inquirer.createPromptModule();

//   prompt(questions).then((data) => {
//     console.log(data);
//     // var readme = content(data);
//     // writeToFile("index", readme);
//   });
// }

// // Initialize app
// init();
