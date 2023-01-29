const inquirer = require("inquirer");
const fs = require("fs");
const { questions } = require("./src/questions");
const { renderManger } = require("./src/renderManager");
const { renderEngineer } = require("./src/renderEngineer");
const { renderIntern } = require("./src/renderIntern");
const { top, bottom } = require("./src/components");

// store all user inputs below
let manager = [];
let engineer = [];
let intern = [];
let option = "";

const prompt = inquirer.prompt;
// p_0 ask the manager, p_1 ask the options, p_2 if engineer, p_3 if intern
let p_0 = () => prompt([questions[0]]);
let p_1 = () => prompt([questions[1]]);
let p_2 = () => prompt([questions[2]]);
let p_3 = () => prompt([questions[3]]);

p_0()
  .then((ans) => {
    manager.push(ans.manager.split(" "));
    return p_1();
  })
  .then((ans) => {
    option = ans.options;
    return check_option(option);
  });

//use function recursion to do loop
function check_option(op) {
  switch (op) {
    case "Add an engineer":
      p_2()
        .then((ans) => {
          engineer.push(ans.engineer.split(" "));
          return p_1();
        })
        .then((ans) => {
          option = ans.options;
          //recursive call
          return check_option(option);
        });
      break;
    case "Add an intern":
      p_3()
        .then((ans) => {
          intern.push(ans.intern.split(" "));
          return p_1();
        })
        .then((ans) => {
          option = ans.options;
          //recursive call
          return check_option(option);
        });
      break;
    case "Finish building team":
      //finish
      console.log(`${manager.length},${engineer.length},${intern.length}`);
      let cards = createComponents();
      createFile();
      appendComponents(cards);
      return;
  }
}
//---------------------------------------using if statement
// if (op === "Add an engineer") {
//   p_2()
//     .then((ans) => {
//       // console.log(ans);
//       engineer.push(ans.engineer.split(" "));
//       return p_1();
//     })
//     .then((ans) => {
//       // console.log(ans);
//       option = ans.options;
//       //recursive call
//       return check_option(option);
//     });
// } else if (op === "Add an intern") {
//   p_3()
//     .then((ans) => {
//       // console.log(ans);
//       intern.push(ans.intern.split(" "));
//       return p_1();
//     })
//     .then((ans) => {
//       // console.log(ans);
//       option = ans.options;
//       //recursive call
//       return check_option(option);
//     });
// } else {
//   //finish
//   console.log(`${manager.length},${engineer.length},${intern.length}`);
//   let cards = createComponents();
//   createFile();
//   appendComponents(cards);
//   return;
// }
// }

// create cards components
function createComponents() {
  let components = "";
  for (let m of manager) {
    components += renderManger(m);
  }
  for (let e of engineer) {
    components += renderEngineer(e);
  }
  for (let i of intern) {
    components += renderIntern(i);
  }
  return components;
}
// create a html file with the top tags
function createFile() {
  fs.writeFileSync("./dist/index.html", top);
}
// append the cards and a bottom
function appendComponents(content) {
  fs.writeFileSync("./dist/index.html", content, { flag: "a" });
  fs.writeFileSync("./dist/index.html", bottom, { flag: "a" });
}

//----------------------------------------------using async await and while loop, should perform better? maybe? (maybe not asyn/await just syntax sugar) also worked, but has to remove all those then(). leave and comment out below.
// (async () => {
//   prompt([questions[0], questions[1]]).then(async (ans) => {
//     console.log(ans);
//     manager = ans.manager.split(" ");
//     console.log(manager);

//     //assign option value so to run while loop
//     option = ans.options;
//     while (option !== "Finish building team") {
//       await check_option(option);
//     }
//     console.log(
//       "manage" +
//         manager.length +
//         "\nengineer" +
//         engineer.length +
//         "\nintern" +
//         intern.length
//     );
//   });
// })();

// async function check_option(op) {
//   if (op === "Add an engineer") {
//     await p_2().then(async (ans) => {
//       console.log(ans);
//       engineer.push(ans.engineer.split(" "));
//       await p_1().then((ans) => {
//         console.log(ans);
//         option = ans.options;
//         // check_option(option);
//       });
//     });
//   } else if (op === "Add an intern") {
//     await p_3().then(async (ans) => {
//       console.log(ans);
//       intern.push(ans.intern.split(" "));
//       await p_1().then((ans) => {
//         console.log(ans);
//         option = ans.options;
//         // check_option(option);
//       });
//     });
//   } else {
//     //finish
//     console.log(
//       "manage" +
//         manager.length +
//         "\nengineer" +
//         engineer.length +
//         "\nintern" +
//         intern.length
//     );

//     return;
//   }
// }
