const Employee = require("../lib/Employee.js");

describe("Employee class", () => {
  describe("Employee methods", () => {
    it("return employee details", () => {
      const employee = new Employee("Tom Jones", 1, "tom@fake.com");
      expect(employee.getName()).toBe("Tom Jones");
      expect(employee.getId()).toBe(1);
      expect(employee.getEmail()).toBe("tom@fake.com");
      expect(employee.getRole()).toBe("Employee");
    });
  });
  describe("Employee constructor", () => {
    it("should create an object with a name, id, email and role if provided valid arguments", () => {
      const employee2 = new Employee("Tina Arena", 12345, "tina@fake.com");
      expect(employee2.name).toBe("Tina Arena");
      expect(employee2.id).toBe(12345);
      expect(employee2.email).toBe("tina@fake.com");
      expect(employee2.role).toBe("Employee");
    });
  });
});
