const Manager = require("../lib/Manager");

describe("test employee", () => {
	it("test name", () => {
		let john = new Manager("John", 1234, "john@gmail.com",101);
		let name = john.getName();
		expect(name).toEqual("John");
	});
	it("test id", () => {});
	it("test email", () => {});
	it("test getRole", () => {});
});
