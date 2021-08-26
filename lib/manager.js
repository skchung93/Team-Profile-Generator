//require the parent class for the subclass
const Employee = require('./employee');

//create a manager subclass that extends the Employee parent class
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //getRole override
    getRole(){
        return 'Manager';
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}



module.exports = Manager;