console.log(`Starting my program`);
const inquirer = require('inquirer');

// Use inquirer to gather manager information
const managerQuestions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'Enter team managers name:',
        name: 'firstName',
        validate: (value) => {
            if (value) {
                return true
            } else {return `Please enter a response`}
        }
    },
    {
        type: 'input',
        message: 'Enter team managers employee ID:',
        name: 'id',
        validate: (value) => {
            if (value) {
                return true
            } else {return `Please enter a response`}
        }
    },
    {
        type: 'input',
        message: 'Enter team managers email address:',
        name: 'email',
        validate: function (email)
        {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }, 
         

    },
    {
        type: 'input',
        message: 'Enter team office number:',
        name: 'officeNum',
        validate: (value) => {
            if (value) {
                return true
            } else {return `Please enter a response`}
        }
    },
]
)}

managerQuestions()
.then((answers) => {
    console.log(answers)
})


