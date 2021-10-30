const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor({ name = null, id = null, email = null, school = null }) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
