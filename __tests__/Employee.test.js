// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole()—returns 'Employee'

const { expect, it } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

describe("Employee class", () => {
  describe("Employee methods", () => {
    it("returns employee details", () => {
      const employee = new Employee("Adam Jones", 1, "adam@fake.com");
      expect(employee.getName()).toBe("Adam Jones");
      expect(employee.getId()).toBe(1);
      expect(employee.getEmail()).toBe("adam@fake.com");
      expect(employee.getRole()).toBe("Employee");
    });
    it("returns an error if new Employee details are incomplete");
  });
});
