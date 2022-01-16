module.exports = (team) => {
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie-edge">
            <title>Team Profile Generator></title>
            <script src="https://kit.fontawesome.com/5bdfca435d.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
        </head>
    
        <body>        
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron text-white">
                        <h1 class="text-center">My Team</h1>
                    </div>
                </div>
            </div>   
            <div class="container">
                <div class="row">                
                        ${createProfile(team)}
                </div>
            </div>            
        </body>
    
        </html>
        `;
};

// Create Team Profile
const createProfile = (team) => {
  // Create Manager Profile
  const createManager = (manager) => {
    return `
          <div class="col-sm-4">
            <div class="card" style="width: 17rem;">
                <div class="card-header bg-primary text-white">
                    <h2>${manager.getName()}</h2>
                    <h3><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h3>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${
                          manager.officeNumber
                        }</li>
                    </ul>
                </div> 
            </div>
        </div>       
    `;
  };

  // Create Engineer Profile
  const createEngineer = (engineer) => {
    return `
          <div class="col-sm-4">
            <div class="card" style="width: 17rem;">
                <div class="card-header bg-primary text-white">
                    <h2>${engineer.getName()}</h2>
                    <h3><i class="fas fa-glasses"></i> ${engineer.getRole()}</h2>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
  };

  // Create Intern Profile
  const createIntern = (intern) => {
    return `
          <div class="col-sm-4">
            <div class="card" style="width: 17rem;">
                <div class="card-header bg-primary text-white">
                    <h2>${intern.getName()}</h2>
                    <h3><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h2>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === 'Manager')
      .map((manager) => createManager(manager))
      .join('')
  );

  html.push(
    team
      .filter((employee) => employee.getRole() === 'Engineer')
      .map((engineer) => createEngineer(engineer))
      .join('')
  );

  html.push(
    team
      .filter((employee) => employee.getRole() === 'Intern')
      .map((intern) => createIntern(intern))
      .join('')
  );

  return html.join('');
};
