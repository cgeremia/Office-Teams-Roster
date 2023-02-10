// Import Employee constructor
const Employee = require("./Employee");

// Extend from Employee constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.School;
  }

// Override role to Intern
  getRole() {
    return "Intern";
  }
}

// Export
module.exports = Intern;
