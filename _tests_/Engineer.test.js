const Engineer = require("../lib/Engineer.js");

test("creates engineer object", () => {
  const engineer = new Engineer(
    "Deborah June",
    "004",
    "deborah.june@email.com",
    "debbiesgit"
  );

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});
