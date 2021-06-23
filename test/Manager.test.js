const Manager = require("../lib/manager");

test("Can set Office number", () => {
    const testValue = "123-4567";
    const e = new Manager("Foo", 2, "manger@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
})

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 2, "manger@test.com", testValue);
    expect(e.getRole()).toBe(testValue);
})