const Manager = require('../lib/manager');

const manager = new Manager ('Steven', '21', 'skchung93@gmail.com', '13');

describe( "Employee", () => {

    it('should return the employee name', ()=> {
        expect(manager.getName()).toEqual('Steven')

    });    

    it('should return the employee id', ()=> {
        expect(manager.getID()).toEqual('21')
    });

    it('should return the employee email', ()=> {
        expect(manager.getEmail()).toEqual('skchung93@gmail.com')
    });

    it('should return the github username of the engineer', ()=> {
        expect(manager.getOfficeNumber()).toEqual('13')
    });

    it('should return the employee role', ()=> {
        expect(manager.getRole()).toEqual('Manager')
    });



})