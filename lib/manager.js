//require the parent class for the subclass
const Employee = require('./employee');

//create a manager subclass that extends the Employee parent class
class Manager extends Employee{
    constructor(officeNumber){
        super(name, id, email);
        const officeNumber = this.officeNumber;
    }
    //getRole override
    getRole(){
        return 'Manager';
    }
}



module.exports = Manager;