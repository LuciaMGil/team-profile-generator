// Gets the employee class from employee.js
const Employee = require("./employee");

// Extends the employee class to manager which includes office number in addition to name, id and email
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email,);
        this.officeNum = officeNum;
    }
    
    // Returns office number by getting the number string and turning it into an integer
    getOfficeNum(){
        return parseInt(this.officeNum);
    }
    
    getRole() {
        return 'Manager';
    }
}

// Exports manager class to be used in other files
module.exports = Manager;