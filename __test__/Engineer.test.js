const Engineer = require("../lib/Engineer");

describe("test employee", () => {
	it("test name", () => {
		let john = new Engineer("John", 1234, "john@gmail.com", "pppzlt");
		let name = john.getName();
		expect(name).toEqual("John");
	});
	it("test id", () => {});
	it("test email", () => {});
	it("test getRole", () => {});
});
