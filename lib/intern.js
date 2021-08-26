//require the parent class for the subclass
const Employee = require('./employee');

//create a manager subclass that extends the Employee parent class
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    //getRole override
    getRole(){
        return 'Manager';
    }
    //getSchool
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;