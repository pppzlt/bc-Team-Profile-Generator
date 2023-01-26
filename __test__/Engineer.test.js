const Engineer = require("../lib/Engineer");

describe("test employee", () => {
  it("test name", () => {
    let john = new Engineer("John", 1234, "john@gmail.com", "pppzlt");
    let name = john.getName();
    expect(name).toEqual("John");
  });
  it("test name should return undefined", () => {
    let john = new Engineer();
    let name = john.getName();
    expect(name).toEqual(undefined);
  });

  it("test id", () => {
    let john = new Engineer("John", 1234, "john@gmail.com", "pppzlt");
    let id = john.getId();
    expect(id).toEqual(1234);
  });
  it("test email", () => {
    let john = new Engineer("John", 1234, "john@gmail.com", "pppzlt");
    let email = john.getEmail();
    expect(email).toEqual("john@gmail.com");
  });
  it("test getRole", () => {
    let john = new Engineer("John", 1234, "john@gmail.com", "pppzlt");
    let role = john.getRole();
    expect(role).toEqual("Engineer");
  });
});
