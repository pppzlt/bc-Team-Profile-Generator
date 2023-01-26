const Employee = require("../lib/Employee");

describe("test employee", () => {
	it("test name", () => {
		let john = new Employee("John", 1234, "john@gmail.com");
		let name = john.getName();
		expect(name).toEqual("John");
	});
	it("test name should return undefined", () => {
		let john = new Employee();
		let name = john.getName();
		expect(name).toEqual(undefined);
    });
    
	it("test id", () => {});
	it("test email", () => {});
	it("test getRole", () => {});
});
