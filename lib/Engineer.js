const Employee = require("../lib/Employee.js");

class Engineer extends Employee {
  constructor({ name = null, id = null, email = null, github = null }) {
    super(name, id, email);
    this.git = github;
  }
  getGit() {
    return this.git;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
