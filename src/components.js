let top = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- <link rel="stylesheet" href="./template.css" /> -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
    />
    <title>My team</title>
  </head>
  <body>
    <nav class="navbar bg-success text-white" style="height: 10rem">
      <div class="container-fluid justify-content-center fs-1">My Team</div>
    </nav>
    <main class="d-flex justify-content-around flex-wrap mt-3">`;

let bottom = `</main>
</body>
</html>`;

module.exports = {top, bottom}