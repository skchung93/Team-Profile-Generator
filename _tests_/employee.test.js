// const { isTypedArray } = require('util/types');
const Employee = require('../lib/employee');

const employee = new Employee ('Steven', '21', 'skchung93@gmail.com');

describe( "Employee", () => {

    it('should return the employee name', ()=> {
        expect(employee.getName()).toEqual('Steven')

    });    

    it('should return the employee id', ()=> {
        expect(employee.getID()).toEqual('21')
    });

    it('should return the employee email', ()=> {
        expect(employee.getEmail()).toEqual('skchung93@gmail.com')
    });

    it('should return the employee role', ()=> {
        expect(employee.getRole()).toEqual('Employee')
    });



})