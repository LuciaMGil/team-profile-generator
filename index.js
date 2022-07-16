console.log(`Starting my program`);
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
var async = require("async");
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


const employeesArr = [];

// Use inquirer to gather manager information
const managerPrompt = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'Enter team managers name:',
        name: 'name',
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
            validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            if (validEmail) {
                return true;
            } else {
                console.log("Please enter a valid email")
                return false;
            }
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

// Questions for engineer prompt
const engineerPrompt = (cb) => {
    return inquirer.prompt([
         
         {
             type: "input",
             name: "name",
             message: "Enter the engineers name: "
         },
         {
             type: "number",
             name: "id",
             message: "Enter the engineers ID number: "
         },
         {
             type: "input",
             name: "email",
             message: "Enter the engineers email: ",
             validate: function (email) 
                {
                    validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                    if (validEmail) {
                        return true;
                    } else {
                        console.log("Please enter a valid email")
                        return false;
                    }
                }, 
         },
         {
             type: "input",
             name: "github",
             message: "Enter the engineers GitHub username:"
         },
     ])
     .then((answers) => {
    
        // Add a engineer to engineer class
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        
        // Add the manager to the list of employees
        employeesArr.push(engineer);
        menu();
    })
 };
 
//  Questions for intern prompt
 const internPrompt = () => {
     return inquirer.prompt([
          
          {
              type: "input",
              name: "name",
              message: "Enter the interns name: "
          },
          {
              type: "number",
              name: "id",
              message: "Enter the interns ID number: "
          },
          {
              type: "input",
              name: "email",
              message: "Enter the interns email: ",
              validate: function (email) 
                {
                    validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                    if (validEmail) {
                        return true;
                    } else {
                        console.log("Please enter a valid email")
                        return false;
                    }
                }, 
          },
          {
              type: "input",
              name: "school",
              message: "Enter the interns school: "
          }
      ])
      .then((answers) => {
    
        // Add a engineer to engineer class
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        
        // Add the manager to the list of employees
        employeesArr.push(intern);
        menu();
        
    })
  };
 
const menu = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "nextStep",
            message: "Would you want to add a employee or intern?",
            choices: ["Add an engineer", "Add an intern", "Exit"]
        }
    ])
    .then((answer) => {
        switch (answer.nextStep) {
            case "Add an engineer":
                engineerPrompt();
                break;
            case "Add an intern":
                internPrompt();
                break;
            case "Exit":
                console.log("Goodbye!");
                break;
        }
    })
}

managerPrompt()
.then((answers) => {
    // Add a manager to manager class
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
    
    // Add the manager to the list of employees
    employeesArr.push(manager);

    // Go back to menu
    menu();
    
})


