const Intern = require("../lib/Intern");

describe("test employee", () => {
	it("test name", () => {
		let john = new Intern("John", 1234, "john@gmail.com",'Emory');
		let name = john.getName();
		expect(name).toEqual("John");
	});
	it("test id", () => {});
	it("test email", () => {});
	it("test getRole", () => {});
});
