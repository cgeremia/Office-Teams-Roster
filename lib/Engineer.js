// Import Employee constructor
const Employee = require("./Employee");

// Extend from Employee constructor
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super (name, id, email);
    this.github = github;
  }

 getGithub() {
    return this.github;
 }

//  Override role to Engineer
  getRole() {
    return "Engineer";
  }
}

// Export
module.exports = Employee;
