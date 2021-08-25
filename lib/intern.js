//require the parent class for the subclass
const Employee = require('./employee');

//create a manager subclass that extends the Employee parent class
class Intern extends Employee{
    constructor(name, id, school){
        super(name, id, email);
        const school = this.school;
    }
    //getRole override
    getRole(){
        return 'Manager';
    }
    //getSchool
    getSchool(){
        return school;
    }
}

module.exports = Intern;