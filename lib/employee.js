// Creates the employee class, with necessary values of name, id, and email
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

// Functions to get names, ids, emails, and roles
    getName() {
        return this.name 
    }
    getId() {
        return this.id 
    }
    getEmail() {
        return this.email 
    }
    getRole() {
        return "Employee"
    }

}

// Exports employee class to be used in employee types
module.exports = Employee;