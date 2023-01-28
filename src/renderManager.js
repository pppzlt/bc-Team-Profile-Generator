const Manager = require("../lib/Manager");

function renderManger(input) {
  let manager_o = new Manager(...input);
  
  return `<div class="card" style="width: 18rem">
        <div class="cad-body">
          <div class="bg-success p-5 text-white">
            <h5 class="card-title">${manager_o.getName()}</h5>
            <p class="card-text">${manager_o.getRole()}</p>
          </div>
          <li class="list-group list-group-flush fs-6">
            <ul class="list-group-item">
              ID:${manager_o.getId()}
            </ul>
            <ul class="list-group-item">
              Email:
              <a href="mailto:${manager_o.getEmail()}">${manager_o.getEmail()}</a>
            </ul>
            <ul class="list-group-item">
              Office number: ${manager_o.officeNumber}
            </ul>
          </li>
        </div>
      </div>`;
}

module.exports = { renderManger };
