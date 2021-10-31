// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const colors = require("colors");
const generateHTML = require("./src/generate-html.js");

// Array of questions for user input
const managerQs = [
  {
    name: "name",
    message: "Enter Manager's full name:",
    validate: (input) => {
      if (!input) {
        console.log(colors.red("\nPlease enter a name"));
        return false;
      }
      return true;
    },
    type: "input",
  },
  {
    name: "id",
    message: "Enter their employee id:",
    validate: (input) => {
      if (isNaN(input) || !input) {
        console.log(colors.red("\nPlease add a valid number"));
        return false;
      }
      return true;
    },
    type: "input",
  },
  {
    name: "email",
    message: "Enter their email:",
    validate: (email) => {
      let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      if (valid) {
        return true;
      } else {
        console.log(colors.red("\nPlease enter a valid email"));
        return false;
      }
    },
    type: "input",
  },
  {
    name: "phone",
    message: "Enter their office phone number:",
    validate: (input) => {
      if (isNaN(input) || !input) {
        console.log(colors.red("\nPlease add a valid number"));
        return false;
      }
      return true;
    },
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
    validate: (input) => {
      if (!input) {
        console.log(colors.red("\nPlease enter a name"));
        return false;
      }
      return true;
    },
    type: "input",
  },
  {
    name: "id",
    message: "Enter their employee id:",
    validate: (input) => {
      if (isNaN(input) || !input) {
        console.log(colors.red("\nPlease add a valid number"));
        return false;
      }
      return true;
    },
    type: "input",
  },
  {
    name: "email",
    message: "Enter their email:",
    validate: (email) => {
      let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      if (valid) {
        return true;
      } else {
        console.log(colors.red("\nPlease enter a valid email"));
        return false;
      }
    },
    type: "input",
  },
  {
    name: "github",
    message: "Enter their github user name",
    validate: (input) => {
      if (!input) {
        console.log(colors.red("\nPlease enter a github user name"));
        return false;
      }
      return true;
    },
    type: "input",
  },
];

const internQs = [
  {
    name: "name",
    message: "Enter their full name:",
    validate: (input) => {
      if (!input) {
        console.log(colors.red("\nPlease enter a name"));
        return false;
      }
      return true;
    },
    type: "input",
  },
  {
    name: "id",
    message: "Enter their employee id:",
    validate: (input) => {
      if (isNaN(input) || !input) {
        console.log(colors.red("\nPlease add a valid number"));
        return false;
      }
      return true;
    },
    type: "input",
  },
  {
    name: "email",
    message: "Enter their email:",
    validate: (email) => {
      let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      if (valid) {
        return true;
      } else {
        console.log(colors.red("\nPlease enter a valid email"));
        return false;
      }
    },
    type: "input",
  },
  {
    name: "school",
    message: "Enter the school they graduated from:",
    validate: (input) => {
      if (!input) {
        console.log(colors.red("\nPlease enter a school"));
        return false;
      }
      return true;
    },
    type: "input",
  },
];

async function ask(questions) {
  let answers = await inquirer.prompt(questions);
  return answers;
}

// Initialize app - run inquirer

async function init() {
  let mgmtAnswer = await ask(managerQs);
  const manager = new Manager(mgmtAnswer);
  let next = await ask(nextEmployeeQ);
  let team;
  let objectItem;
  let engineers = [];
  let interns = [];
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
    next = await ask(nextEmployeeQ);
  }

  let generatePage = await generateHTML(manager, engineers, interns);
  writeToFile(generatePage);
}

init();

// Write index.html file
function writeToFile(generatePage) {
  fs.writeFile(`./dist/index.html`, generatePage, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(colors.green("\nFile successfully generated = index.html"));
  });
}
