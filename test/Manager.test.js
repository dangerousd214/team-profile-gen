const Manager = require("../lib/manager");

test("Can set Office number", () => {
    const testValue = "123-4567";
    const e = new Manager("Foo", 2, "manger@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
})