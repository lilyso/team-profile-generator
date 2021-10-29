const Engineer = require("../lib/Engineer.js");

describe("Engineer class", () => {
  describe("Engineer methods", () => {
    it("return Engineer details", () => {
      const engineer = new Engineer(
        "Barbara Striesand",
        52,
        "barbara@fake.com",
        "babs"
      );
      expect(engineer.getName()).toBe("Barbara Striesand");
      expect(engineer.getId()).toBe(52);
      expect(engineer.getEmail()).toBe("barbara@fake.com");
      expect(engineer.getRole()).toBe("Engineer");
      expect(engineer.getGit()).toBe("babs");
    });
  });
  describe("Engineer constructor", () => {
    it("should create an object with a name, id, email and role if provided valid arguments", () => {
      const engineer2 = new Engineer(
        "Jack White",
        98765,
        "jack@fake.com",
        "jackw"
      );
      expect(engineer2.name).toBe("Jack White");
      expect(engineer2.id).toBe(98765);
      expect(engineer2.email).toBe("jack@fake.com");
      expect(engineer2.git).toBe("jackw");
    });
  });
});
