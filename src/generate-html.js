//need to add email and github links

async function generateHTML(manager, engineers, interns) {
  let html = "";
  html += `<div class="card mx-2" style="width: 18rem">
<div class="card-header text-white manager-card">
<h3>${manager.name}</h3>
<h3>Manager</h3>
</div>
<div class="card-body bg-light">
  <p class="card-text">
    <ul class="list-group">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
    <li class="list-group-item">Office Number: ${manager.phone}</li>
    </ul>
  </p>
</div>
</div>`;

  engineers.forEach((engineer) => {
    html += `<div class="card mx-2" style="width: 18rem">
    <div class="card-header text-white engineer-card">
    <h3>${engineer.name}</h3>
    <h3>Engineer</h3>
    </div>
    <div class="card-body bg-light">
      <p class="card-text">
        <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">Github: <a href="http://github.com/${engineer.git}" target="_blank">${engineer.git}</a></li>
        </ul>
      </p>
    </div>
    </div>`;
  });
  interns.forEach((intern) => {
    html += `<div class="card mx-2" style="width: 18rem">
    <div class="card-header text-white intern-card">
    <h3>${intern.name}</h3>
    <h3>Intern</h3>
    </div>
    <div class="card-body bg-light">
      <p class="card-text">
        <ul class="list-group">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
        </ul>
      </p>
    </div>
    </div>`;
  });
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Team Profile Generator</title>
    <meta
      name="description"
      content="Team Profile Generator using the Command Line"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="../dist/style.css" />
  </head>
  <body>
    <header class="jumbotron header text-white text-center">
      <h1>My Team</h1>
    </header>
    <div class="p-2 d-flex flex-wrap justify-content-center">
      ${html}
    </div>  
  </body>
</html>`;
}

module.exports = generateHTML;
