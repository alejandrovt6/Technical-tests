const simplifyPath = require('../ex2');

// Test case 1
test("Path 1 OK", () => {
    const result1 = simplifyPath("/home/");
    expect(result1).toBe("/home");
});

// Test case 2
test("Path 2 OK", () => {
    const result2 = simplifyPath("/x/./y/../../z/");
    expect(result2).toBe("/z");
});

// Test case 3
test("Path 3 OK", () => {
    const result3 = simplifyPath("/../");
    expect(result3).toBe("/");
});

// Test case 4
test("Path 4 OK", () => {
    const result4 = simplifyPath("/home//test/");
    expect(result4).toBe("/home/test");
});
