//require the parent class for the subclass
const Employee = require('./employee');

//create a manager subclass that extends the Employee parent class
class Engineer extends Employee{
    constructor(name, id, github){
        super(name, id, email);
        const github = this.github;
    }
    //getRole override
    getRole(){
        return 'Engineer';
    }
    getGithub(){
        return github;
    }
}

module.exports = Engineer;