// Gets the employee class from employee.js
const Employee = require("./employee");

// Extends employee class to engineers and adds value for school
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;