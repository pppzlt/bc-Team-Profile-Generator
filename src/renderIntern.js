const Intern = require("../lib/Intern");

function renderIntern() {
  let intern_o = new Intern(...input);

  return `<div class="card" style="width: 18rem">
        <div class="cad-body">
          <div class="bg-success p-5 text-white">
            <h5 class="card-title">${intern_o.getName()}</h5>
            <p class="card-text">${intern_o.getRole()}</p>
          </div>
          <li class="list-group list-group-flush fs-6">
            <ul class="list-group-item">
              ID:${intern_o.getId()}
            </ul>
            <ul class="list-group-item">
              Email:
              <a href="mailto:${intern_o.getEmail()}">${intern_o.getEmail()}</a>
            </ul>
            <ul class="list-group-item">
              School: ${intern_o.getSchool()}
            </ul>
          </li>
        </div>
      </div>`;
}

module.exports = { renderIntern };
