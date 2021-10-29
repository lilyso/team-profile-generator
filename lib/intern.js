const Employee = require("../lib/Employee.js");

class Intern extends Employee {
  constructor({ name = null, id = null, email = null, school = null }) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
