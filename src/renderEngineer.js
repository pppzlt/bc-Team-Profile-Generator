const Engineer = require("../lib/Engineer");

function renderEngineer(input) {
  let engineer_o = new Engineer(...input);

  return `<div class="card mb-2" style="width: 18rem">
        <div class="cad-body">
          <div class="bg-success p-5 text-white">
            <h5 class="card-title">${engineer_o.getName()}</h5>
            <p class="card-text">${engineer_o.getRole()}</p>
          </div>
          <li class="list-group list-group-flush fs-6">
            <ul class="list-group-item">
              ID:${engineer_o.getId()}
            </ul>
            <ul class="list-group-item">
              Email:
              <a href="mailto:${engineer_o.getEmail()}">${engineer_o.getEmail()}</a>
            </ul>
            <ul class="list-group-item">
              Github username: <a href="https://github.com/${engineer_o.getGithub()}" target="_blank">${engineer_o.getGithub()}</a>
            </ul>
          </li>
        </div>
      </div>`;
}

module.exports = { renderEngineer };
