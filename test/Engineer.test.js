const Engineer = require("../lib/engineer");

test("Can set Github via constructor argument", () => {
    const testValue = "github";
    const e = new Engineer("foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
})

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("foo", 1, "test@test.com", testValue);
    expect(e.getRole()).toBe(testValue);
})

test("getId() should return \"02\"", () => {
    const testValue = "02";
    const e = new Engineer("foo", "test@test.com", testValue, "github");
    expect(e.getId()).toBe(testValue);
})

test("getEmail() should return \"test@test.com\"", () => {
    const testValue= "test@test.com";
    const e = new Engineer("foo", 1, testValue, "gihub");
    expect(e.getEmail()).toBe(testValue);
})