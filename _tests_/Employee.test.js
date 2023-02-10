const Employee = require("../lib/Employee.js");

test("creates employee object", () => {
  const employee = new Employee(
    "Eric Stratta",
    "005",
    "eric.stratta@email.com"
  );

  expect(employee.name).toBe("Eric Stratta");
  expect(employee.id).toBe("005");
  expect(employee.email).toBe("eric.stratta@email.com");
});
