const Manager = require("../lib/Manager.js");

test("creates manager object", () => {
  const manager = new Manager("John Doe", "007", "john.doe@email.com", "15");

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(String));
});
