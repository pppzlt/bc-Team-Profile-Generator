const Manager = require("../lib/Manager");

describe("test managers", () => {
  it("test name", () => {
    let john = new Manager("John", 1234, "john@gmail.com", 101);
    let name = john.getName();
    expect(name).toEqual("John");
  });
  it("test name should return undefined", () => {
    let john = new Manager();
    let name = john.getName();
    expect(name).toEqual(undefined);
  });
  it("test id", () => {
    let john = new Manager("John", 1234, "john@gmail.com", 101);
    let id = john.getId();
    expect(id).toEqual(1234);
  });
  it("test email", () => {
    let john = new Manager("John", 1234, "john@gmail.com", 101);
    let email = john.getEmail();
    expect(email).toEqual("john@gmail.com");
  });
  it("test getRole", () => {
    let john = new Manager("John", 1234, "john@gmail.com", 101);
    let role = john.getRole();
    expect(role).toEqual("Manager");
  });
});
