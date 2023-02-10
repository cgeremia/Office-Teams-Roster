const Intern = require("../lib/Intern.js");

test("creates intern object", () => {
  const intern = new Intern(
    "Morgan Tallbot",
    "0009",
    "morgan.tallbot@email.com",
    "University of Florida"
  );

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});
