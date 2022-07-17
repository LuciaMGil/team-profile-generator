const Engineer = require(`../lib/Engineer`);

describe("Gets Engineer role from getRole function", () => {
    it("Testing role", () =>{
        const testConstructor = "Engineer";
        const testEngineer = new Engineer("Harry", 1, "Engineer@test.com", 'LuciaMGil');
        expect(testEngineer.getRole()).toBe(testConstructor);
    })
});

describe("Gets school from getSchool function", () => {
    it("Testing getSchool", () =>{
        const testConstructor = 'LuciaMGil';
        const testEngineer = new Engineer("Harry", 1, "Engineer@test.com", 'LuciaMGil');
        expect(testEngineer.getGithub()).toBe(testConstructor);
    })
})

describe("Gets school from contructor", () => {
    it("Testing constructor", () =>{
        const testConstructor = 'LuciaMGil';
        const testEngineer = new Engineer("Harry", 1, "Engineer@test.com", 'LuciaMGil');
        expect(testEngineer.github).toBe(testConstructor);
    })
})