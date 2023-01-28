const inquirer = require("inquirer");
const fs = require("fs");
const { questions } = require("./src/questions");
const { renderManger } = require("./src/renderManager");
const { renderEngineer } = require("./src/renderEngineer");
const { renderIntern } = require("./src/renderIntern");

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

prompt([questions[0], questions[1]])
  .then((ans) => {
    console.log(ans);
    manager.push(ans.manager.split(" "));
    console.log(manager);
    //initialte a new manager instance
    //assign option value so to run (while loop) change to recursive calls. otherwise have to use async/await
    option = ans.options;
    check_option(option);
  })
  .then(() => {
     console.log(
       "manage" +
         manager.length +
         "\nengineer" +
         engineer.length +
         "\nintern" +
         intern.length
     );
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
   
    return;
  }
}
