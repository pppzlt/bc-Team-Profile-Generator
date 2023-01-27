questions = [
  {
    name: "manager",
    message:
      "Please enter the manager's name, employee ID, email address, office number:",
    type: "input",
  },
  {
    name: "options",
    message: "What do you want to do next?",
    type: "list",
    choices: ["Add an engineer", "Add an intern", "Finish building team"],
  },
  {
    name: "engineer",
    message:
      "Please enter the engineer's name, employee ID, email address, Github username: ",
    type: "input",
  },
  {
    name: "intern",
    message:
      "Please enter the intern's name, employee ID, email address, school:",
    type: "input",
  },
];

module.exports = { questions };