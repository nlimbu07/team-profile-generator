// Dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

// Constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const dist_Dir = path.resolve(__dirname, 'dist');
const Path = path.join(dist_Dir, 'index.html');

const render = require('./src/page.template');

const teamArr = [];
const idArr = [];

// Start application
function initApp() {
  // addTeam function
  function addTeam() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'memberChoice',
          message: 'What would you like to add next?',
          choices: ['Manager', 'Engineer', 'Intern', 'End application'],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case 'Manager':
            addManager();
            break;
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
          default:
            generateHTML();
        }
      });
  }

  // add manager
  function addManager() {
    console.log('Start building your team profile.');
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What's manager's name?",
        },
        {
          type: 'input',
          name: 'managerId',
          message: "What's the manager's ID?",
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What's the manager's email?",
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: "What's the manager's office number?",
        },
      ])
      .then((results) => {
        const manager = new Manager(
          results.managerName,
          results.managerId,
          results.managerEmail,
          results.managerOfficeNumber
        );
        teamArr.push(manager);
        idArr.push(results.managerId);
        addTeam();
      });
  }

  // add Engineer
  function addEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: "What's the engineer's name?",
        },
        {
          type: 'input',
          name: 'engineerId',
          message: "What's the engineer's ID?",
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: "What's the engineer's email?",
        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: "What's the engineer's GitHub username?",
        },
      ])
      .then((results) => {
        const engineer = new Engineer(
          results.engineerName,
          results.engineerId,
          results.engineerEmail,
          results.engineerGithub
        );
        teamArr.push(engineer);
        idArr.push(results.engineerId);
        addTeam();
      });
  }

  // add intern
  function addIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: "What's the intern's name?",
        },
        {
          type: 'input',
          name: 'internId',
          message: "What's the intern's ID?",
        },
        {
          type: 'input',
          name: 'internEmail',
          message: "What's the intern's email?",
        },
        {
          type: 'input',
          name: 'internSchool',
          message: "What's the intern's school?",
        },
      ])
      .then((results) => {
        const intern = new Intern(
          results.internName,
          results.internId,
          results.internEmail,
          results.internSchool
        );
        teamArr.push(intern);
        idArr.push(results.internId);
        addTeam();
      });
  }

  function generateHTML() {
    if (!fs.existsSync(dist_Dir)) {
      fs.mkdirSync(dist_Dir);
    }
    console.log('Generating Team Profile..... ');
    fs.writeFileSync(Path, render(teamArr), 'utf-8');
  }
  addTeam();
}

// Function call to initialize app
initApp();
