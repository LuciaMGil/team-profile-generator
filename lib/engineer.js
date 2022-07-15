// Gets the employee class from employee.js
const Employee = require('./employee');

// Extends employee class to engineers and adds value for github
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }
    
    getRole() {
        return 'Engineer';
    }
}

// Exports engineer class to be used in other files
module.exports = Engineer;