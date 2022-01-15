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

const directory = path.resolve(__dirname, 'dist');
const outputPath = path.join(directory, 'index.html');

const render = require('./src/page.template');
