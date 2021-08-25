//Creating an employee parent class
class Employee {
    //using a constructor to create the class with Name, ID, Email
    constructor(name, id, email) {
        const name = this.name;
        const id = this.id;
        const email = this.email;
    };
    //getName method
    getName(){
        return name;
    }
    //getID method
    getID(){
        return id;
    }
    //getEmail method
    getEmail(){
        return email;
    }
    getRole(){
        return 'Employee';
    }
}

//method to export the module to be used in Index.js.
module.exports = employee;