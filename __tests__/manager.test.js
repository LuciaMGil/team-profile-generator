const Manager = require(`../lib/manager`);

describe("Gets manager role from getRole function", () => {
    it("Testing role", () =>{
        const testConstructor = "Manager";
        const testManager = new Manager("John", 1, "manager@test.com", 404-333-4444);
        expect(testManager.getRole()).toBe(testConstructor);
    })
});

describe("Gets office number from getOfficeNum function", () => {
    it("Testing getOfficeNum", () =>{
        const testConstructor = 404-333-4444;
        const testManager = new Manager("John", 1, "manager@test.com", 404-333-4444);
        expect(testManager.getOfficeNum()).toBe(testConstructor);
    })
})

describe("Gets office number from contructor", () => {
    it("Testing constructor", () =>{
        const testConstructor = 404-333-4444;
        const testManager = new Manager("John", 1, "manager@test.com", 404-333-4444);
        expect(testManager.officeNum).toBe(testConstructor);
    })
})