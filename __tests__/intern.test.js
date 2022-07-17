const Intern = require(`../lib/intern`);

describe("Gets intern role from getRole function", () => {
    it("Testing role", () =>{
        const testConstructor = "Intern";
        const testIntern = new Intern("Harry", 1, "intern@test.com", 'Harvard');
        expect(testIntern.getRole()).toBe(testConstructor);
    })
});

describe("Gets school from getSchool function", () => {
    it("Testing getSchool", () =>{
        const testConstructor = 'Harvard';
        const testIntern = new Intern("Harry", 1, "intern@test.com", 'Harvard');
        expect(testIntern.getSchool()).toBe(testConstructor);
    })
})

describe("Gets school from contructor", () => {
    it("Testing constructor", () =>{
        const testConstructor = 'Harvard';
        const testIntern = new Intern("Harry", 1, "intern@test.com", 'Harvard');
        expect(testIntern.school).toBe(testConstructor);
    })
})