console.log(`Starting my program`);
const inquirer = require('inquirer');


const employees = [];

// Use inquirer to gather manager information
const managerPrompt = () => {
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
const engineerPrompt = () => {
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
     ]);
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
      ]);
  };
 


managerPrompt()
.then((answers) => {
    console.log(answers)
})


