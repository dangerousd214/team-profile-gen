const Engineer = require("../lib/engineer");

test("Can set Github via constructor argument", () => {
    const testValue = "github";
    const e = new Engineer("foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
})