const Intern = require("../lib/intern");

test("Can set school ", () => {
    const testValue = "SMU";
    const e = new Intern("Foo", 3, "intern@test.com", testValue)
    expect(e.school).toBe(testValue);
})

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 3, "intern@test.com", testValue)
    expect(e.getRole()).toBe(testValue);
})