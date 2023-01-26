const Intern = require("../lib/Intern");

describe("test intern", () => {
  it("test name", () => {
    let john = new Intern("John", 1234, "john@gmail.com", "Emory");
    let name = john.getName();
    expect(name).toEqual("John");
  });
  it("test name should return undefined", () => {
    let john = new Intern();
    let name = john.getName();
    expect(name).toEqual(undefined);
  });

  it("test id", () => {
    let john = new Intern("John", 1234, "john@gmail.com", "Emory");
    let id = john.getId();
    expect(id).toEqual(1234);
  });
  it("test email", () => {
    let john = new Intern("John", 1234, "john@gmail.com", "Emory");
    let email = john.getEmail();
    expect(email).toEqual("john@gmail.com");
  });
  it("test getRole", () => {
    let john = new Intern("John", 1234, "john@gmail.com", "Emory");
    let role = john.getRole();
    expect(role).toEqual("Intern");
  });
});
