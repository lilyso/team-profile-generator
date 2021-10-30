//need to add email and github links

async function generateHTML(manager, engineers, interns) {
  console.log("generating", manager, engineers, interns);
  let html = "";
  html += `<div class="card mx-2" style="width: 18rem">
<div class="card-header text-white bg-primary">
<h3>${manager.name}</h3>
<h3>Manager</h3>
</div>
<div class="card-body bg-light">
  <p class="card-text">
    <ul class="list-group">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">Email: ${manager.email}</li>
    <li class="list-group-item">Office Number: ${manager.phone}</li>
    </ul>
  </p>
</div>
</div>`;

  engineers.forEach((engineer) => {
    html += `<div class="card mx-2" style="width: 18rem">
    <div class="card-header text-white bg-primary">
    <h3>${engineer.name}</h3>
    <h3>Engineer</h3>
    </div>
    <div class="card-body bg-light">
      <p class="card-text">
        <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: ${engineer.email}</li>
        <li class="list-group-item">Github: ${engineer.git}</li>
        </ul>
      </p>
    </div>
    </div>`;
  });
  interns.forEach((intern) => {
    html += `<div class="card mx-2" style="width: 18rem">
    <div class="card-header text-white bg-primary">
    <h3>${intern.name}</h3>
    <h3>Intern</h3>
    <p></p>
    <p>Office number: </p>
    </div>
    <div class="card-body bg-light">
      <p class="card-text">
        <ul class="list-group">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: ${intern.email}</li>
        <li class="list-group-item">Office Number: ${intern.school}</li>
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
  </head>
  <body>
    <header class="jumbotron bg-danger text-white text-center">
      <h1>My Team</h1>
    </header>
    <div class="p-2 d-flex flex-wrap justify-content-center">
    <section>
      ${html}
    </section>  
  </body>
</html>`;
}

module.exports = generateHTML;
