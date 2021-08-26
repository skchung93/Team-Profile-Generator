//Creating an employee parent class
class Employee {
    //using a constructor to create the class with Name, ID, Email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    //getName method
    getName(){
        return this.name;
    }
    //getID method
    getID(){
        return this.id;
    }
    //getEmail method
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee';
    }
}

//method to export the module to be used in Index.js.
module.exports = Employee;