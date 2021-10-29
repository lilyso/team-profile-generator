// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const content = require("./src/generate-html.js");

// Array of questions for user input
const managerQs = [
  {
    name: "name",
    message: "Enter Manager's full name:",
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
    name: "phone",
    message: "Enter their office phone number:",
    type: "input",
  },
];

const nextEmployeeQ = {
  type: "list",
  name: "employee",
  message: "Add another employee?",
  choices: ["Engineer", "Intern", "Exit"],
};

const engineerQs = [
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
    message: "Enter their github user name",
    type: "input",
  },
];

const internQs = [
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
    name: "school",
    message: "Enter the school they graduated from:",
    type: "input",
  },
];

async function ask(questions) {
  let answers = await inquirer.prompt(questions);
  return answers;
}

async function addEmployee(employee) {
  let response;
  if (employee.name === "Engineer") {
    response = await ask(engineerQs);
  } else {
    response = await ask(internQs);
  }
  return response;
}

async function init() {
  let mgmtAnswer = await ask(managerQs);
  let next = await inquirer.prompt(nextEmployeeQ);
  let team;
  let objectItem;
  let engineers = [];
  let interns = [];
  console.log(next);
  while (next.employee !== "Exit") {
    if (next.employee === "Engineer") {
      team = await ask(engineerQs);
      objectItem = new Engineer(team);
      engineers.push(objectItem);
    } else {
      team = await ask(internQs);
      objectItem = new Intern(team);
      interns.push(objectItem);
    }
    next = await inquirer.prompt(nextEmployeeQ);
  }
  console.log(engineers, interns, mgmtAnswer);
}

init();

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
