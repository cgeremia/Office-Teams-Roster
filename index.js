const generateHTML = require("./src/generateHTML");
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Employee = require("./lib/Employee.js")
const teamArray = [];

// Manager prompts
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the manager of this team?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID number.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the manager's ID number.");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email.",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter an office number.");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);
      teamArray.push(manager);
      console.log(manager);
    });
};

// Employee prompts 
const addEmployee = () => {
  console.log(`
    =================
    Adding employees to the team
    =================
    `);

  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose your employee's role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What's the name of the employee?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an employee's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the employee's ID number.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the employee's ID number.");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email.",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter the employee's email.");
            return false;
          }
        },
      },

    //   If employee is an Engineer 
      {
        type: "input",
        name: "github",
        message: "Please enter the employee's github username.",
        when: (input) => input.role === "Engineer",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's github username.");
          }
        },
      },

    //   If employee is an Intern
      {
        type: "input",
        name: "school",
        message: "What school does the intern attend?",
        when: (input) => input.role === "Intern",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the name of the interns school.");
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add additional team members?",
        default: false,
      },
    ])
    .then((employeeData) => {
      
      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);

        console.log(employee);
      }

      teamArray.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};

// generate HTML page file 
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your team's roster has been successfully created!");
    }
  });
};

addManager()
  .then(addEmployee)
  .then((teamArray) => {
    return generateHTML(teamArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
