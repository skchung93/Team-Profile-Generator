const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require ('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require ('./lib/intern');

let team = [];

//Prompt to enter the team manager's name, employee ID, email address, and office number
function managerPrompt(){
    //inquirer thing
    inquirer.prompt([
        //name
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'managerName',
        },
        //employee ID
        {
            type: 'input', 
            message: 'What is their employee ID number?',
            name: 'managerID',
        },
        //email address
        {
            type: 'input',
            message: "What is their email address?",
            name: 'managerEmail',
        },
        //office number
        {
            type: 'input',
            message: 'What is the office number they work in?',
            name: 'managerOffNumber'
        },
    ])
    .then( (res)=> {
        let managerName = res.managerName;
        let managerID = res.managerID;
        let managerEmail = res.managerEmail;
        let officeNumber = res.managerOffNumber;
        let employee = new Manager (managerName, managerID, managerEmail, officeNumber);
        team.push(employee);
        // calling the type function
        type();
    });
    //calling the type function
    // type();
};

//prompt to choose engineer or intern
function type(){ 
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: "Is the employee an Engineer or an Intern?",
            choices: ['Engineer', 'Intern'],
        },
    ])
    .then (answers => {
        console.log(answers.employeeType)
        let employeeType = answers.employeeType;
    //sending to the correct prompt when employee type is selected
        if(employeeType == 'Engineer'){
            engineerPrompt();
        }else{
            internPrompt();
        }
    });
};    

//engineer prompt: engineer's name, ID, email, github
function engineerPrompt(){
    inquirer.prompt([
        //name
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'engineerName',
        },
        //employee ID
        {
            type: 'input',
            message: 'What is their employee ID number?',
            name: 'engineerID',
        },
        //email address
        {
            type: 'input',
            message: 'What is their email address?',
            name: 'employeeEmail',
        },
        //github
        {
            type: 'input',
            message: 'What is their github username?',
            name: 'engineerGithub',
        },
    ])
    .then( (res)=> {
        let engineerName = res.engineerName;
        let engineerID = res.engineerID;
        let engineerEmail = res.engineerEmail;
        let gitHub = res.engineerGithub;
        let employee = new Engineer (engineerName, engineerID, engineerEmail, gitHub);
        team.push(employee);
        //calling the next function to either bring the user back to the menu or generate the HTML
    
        next();
    });

};    

//intern prompt: intern's name, ID, email, school
function internPrompt(){
    inquirer.prompt([
        //name
        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'internName',
        },
        //employee ID
        {
            type: 'input',
            message: 'What is their employee ID number?',
            name: 'internID',
        },
        //email address
        {
            type: 'input',
            message: 'What is their email address?',
            name: 'internEmail',
        },
        //school
        {
            type: 'input',
            message: 'What school do they attend?',
            name: 'internSchool',
        },
    ])
    .then( (res)=> {
        let internName = res.interName;
        let internID = res.internID;
        let internEmail = res.internEmail;
        let school = res.internSchool;
        let employee = new Intern (internName, internID, internEmail, school);
        team.push(employee);
         //calling the next function to either bring the user back to the menu or generate the HTML
        next();
    });
    
};    

//function to take back to the menu or generate html when team is complete
function next(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add more employees?',
            choices: ['Yes', 'No'],
            name: 'maybe',
        }
    ])
    .then( (res) => {
        let maybe = res.maybe;
        if(maybe == 'Yes'){
            type();
        }else{
            generateHTML();
        }
    });
};



//function to generate the HTML
function generateHTML(){
    let cardHtml = '';
    //generating cards for each employee
    for (var i = 0; i < team.length; i++){
        if (team[i].getRole() === 'Manager'){
            let card = 
            `<div class = "card">
                <div class = "card-body">
                    <h4 class = "card-title"> ${team[i].getName()}</h4>
                    <h5 class = "card-subtitle"> ${team[i].getRole()}</h5>
                    <ul class = "list-group list-group-flush">
                        <li class = "list-group-item">ID: ${team[i].getID()} </li>
                        <li class = "list-group-item">Email: ${team[i].getEmail()} </li>
                        <li class = "list-group-item">Office Number: ${team[i].getOfficeNumber()} </li>
                    </ul>
                </div>
            </div>    
            `;
            cardHtml += card;
        }else if (team[i].getRole() === 'Engineer'){
            let card = 
            `<div class = "card">
                <div class = "card-body">
                    <h4 class = "card-title"> ${team[i].getName()}</h4>
                    <h5 class = "card-subtitle"> ${team[i].getRole()}</h5>
                    <ul class = "list-group list-group-flush">
                        <li class = "list-group-item">ID: ${team[i].getID()} </li>
                        <li class = "list-group-item">Email: ${team[i].getEmail()} </li>
                        <li class = "list-group-item">GitHub Username: ${team[i].getGithub()} </li>
                    </ul>
                </div>
            </div>    
            `;
            cardHtml += card;
        }else if (team[i].getRole() === 'Intern'){
            let card = 
            `<div class = "card">
                <div class = "card-body">
                    <h4 class = "card-title"> ${team[i].getName()}</h4>
                    <h5 class = "card-subtitle"> ${team[i].getRole()}</h5>
                    <ul class = "list-group list-group-flush">
                        <li class = "list-group-item">ID: ${team[i].getID()} </li>
                        <li class = "list-group-item">Email: ${team[i].getEmail()} </li>
                        <li class = "list-group-item">School: ${team[i].getSchool()} </li>
                    </ul>
                </div>
            </div>    
            `;
            cardHtml += card;
        }
        };               
    

    //whole HTML doc
    const html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <div class = "bg-danger text-align-center">
            <h1 class = "text-white"> My Team </h1>
        </div>
        
        <div class = "card">
            ${cardHtml}
        </div>
    </body>
    </html>
    `;


    fs.writeFile('./dist/index.html', html, (err) =>
        err ? console.log(err) : console.log('Success!'));

}

managerPrompt();