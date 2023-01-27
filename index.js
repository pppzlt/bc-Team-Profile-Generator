const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const fs = require("fs");
const { questions } = require("./src/questions");
const internal = require("stream");

const prompt = inquirer.createPromptModule();

fs.writeFileSync("./dist/index.html", "");

let manager = [];
let engineer = [];
let intern = [];
let option = "";

// p_1 ask the options, p_2 if engineer, p_3 if intern
let p_1 = () => prompt([questions[1]]);
let p_2 = () => prompt([questions[2]]);
let p_3 = () => prompt([questions[3]]);

prompt([questions[0], questions[1]]).then((ans) => {
  console.log(ans);
  manager.push(ans.manager.split(" "));
  console.log(manager);
  //initialte a new manager instance
  //assign option value so to run (while loop) change to recursive calls. otherwise have to use async/await
  option = ans.options;
  check_option(option);
});

// let manager1 = new Manager(...manager);

//use function recursion to do loop
function check_option(op) {
  if (op === "Add an engineer") {
    p_2().then((ans) => {
      console.log(ans);
      engineer.push(ans.engineer.split(" "));
      p_1().then((ans) => {
        console.log(ans);
        option = ans.options;
        check_option(option);
      });
    });
  } else if (op === "Add an intern") {
    p_3().then((ans) => {
      console.log(ans);
      intern.push(ans.intern.split(" "));
      p_1().then((ans) => {
        console.log(ans);
        option = ans.options;
        check_option(option);
      });
    });
  } else {
    //finish
    console.log(
      "manage" +
        manager.length +
        "\nengineer" +
        engineer.length +
        "\nintern" +
        intern.length
    );
  }
}
