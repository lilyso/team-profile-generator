const Intern = require("../lib/Intern.js");

describe("Intern class", () => {
  describe("Intern methods", () => {
    it("return Intern details", () => {
      const intern = new Intern(
        "Harry Potter",
        934,
        "hpotter@fake.com",
        "Hogwarts"
      );
      expect(intern.getName()).toBe("Harry Potter");
      expect(intern.getId()).toBe(934);
      expect(intern.getEmail()).toBe("hpotter@fake.com");
      expect(intern.getRole()).toBe("Intern");
      expect(intern.getSchool()).toBe("Hogwarts");
    });
  });
  describe("Intern constructor", () => {
    it("should create an object with a name, id, email and role if provided valid arguments", () => {
      const Intern2 = new Intern(
        "Elle Woods",
        555,
        "ewoods@fake.com",
        "Stanford"
      );
      expect(Intern2.name).toBe("Elle Woods");
      expect(Intern2.id).toBe(555);
      expect(Intern2.email).toBe("ewoods@fake.com");
      expect(Intern2.school).toBe("Stanford");
    });
  });
});
