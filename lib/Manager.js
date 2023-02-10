// Import Employee constructor
const Employee = require("./Employee");

// Extend from Employee constructor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  // Override role to Manager
  getRole() {
    return "Manager";
  }
}

// Export
module.exports = Manager;
