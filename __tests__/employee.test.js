const Employee = require(`../lib/Employee`);


describe("getRole() should return \"Employee\"", () => {

    it("Testing getting email through function", () =>{
       const testValue = "Employee";
        const testEmployee = new Employee("Alice", 1, "bob@test.com");
        expect(testEmployee.getRole()).toBe(testValue);
    })
});

describe("Gets Employee role from getRole function", () => {
    it("Testing role", () =>{
        const testConstructor = "Employee";
        const testEmployee = new Employee("Harry", 1, "Employee@test.com", 'LuciaMGil');
        expect(testEmployee.getRole()).toBe(testConstructor);
    })
});


describe("Can set name through constructor arguments", () => {
    it("Testing setting name through constructor", () =>{
        const name = 'Lucia';
        const testEmployee = new Employee(name);
        expect(testEmployee.name).toBe(name);
    })
  });
  
  describe("Can set ID through constructor argument", () => {
    it("Testing setting ID through constructor", () =>{
        const testValue = 'Lucia';
        const testEmployee = new Employee('Lucia', testValue);
        expect(testEmployee.id).toBe(testValue);
    })
  });
  
  describe("Can set email through constructor argument", () => {
    it("Testing setting email through constructor", () =>{
         const testValue = "bob@test.com";
        const testEmployee = new Employee("Foo", 1, testValue);
        expect(testEmployee.email).toBe(testValue);
    })
    
  });
  
  describe("Can set name through getName function", () => {
    it("Testing setting name through function", () =>{
        const testValue = "Lucia";
        const testEmployee = new Employee(testValue);
        expect(testEmployee.getName()).toBe(testValue);
    })
    
  });
  
  describe("Can get id through getId()", () => {
    it("Testing getting id through function", () =>{
        const testValue = 400;
        const testEmployee = new Employee("Foo", testValue);
        expect(testEmployee.getId()).toBe(testValue);
    })
  });
  
  describe("Can get email through getEmail()", () => {
    it("Testing getting email through function", () =>{
        const testValue = "bob@test.com";
        const testEmployee = new Employee("Foo", 1, testValue);
        expect(testEmployee.getEmail()).toBe(testValue);
    })
    
  });
  
  