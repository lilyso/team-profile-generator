const Manager = require("../lib/Manager.js");

describe("Manager class", () => {
  describe("Manager methods", () => {
    it("return Manager details", () => {
      const manager = new Manager(
        "Ron Swanson",
        16,
        "manager@fake.com",
        "0101010101"
      );
      expect(manager.getName()).toBe("Ron Swanson");
      expect(manager.getId()).toBe(16);
      expect(manager.getEmail()).toBe("manager@fake.com");
      expect(manager.getRole()).toBe("Manager");
      expect(manager.getPhone()).toBe("0101010101");
    });
  });
  describe("Manager constructor", () => {
    it("should create an object with a name, id, email and role if provided valid arguments", () => {
      const Manager2 = new Manager(
        "Leslie Knope",
        100,
        "leslieknope@wesome.com",
        "9988776655"
      );
      expect(Manager2.name).toBe("Leslie Knope");
      expect(Manager2.id).toBe(100);
      expect(Manager2.email).toBe("leslieknope@wesome.com");
      expect(Manager2.phone).toBe("9988776655");
    });
  });
});
