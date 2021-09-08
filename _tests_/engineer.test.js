const Engineer = require('../lib/engineer');

const engineer = new Engineer ('Steven', '21', 'skchung93@gmail.com', '@skchung93');

describe( "Employee", () => {

    it('should return the employee name', ()=> {
        expect(engineer.getName()).toEqual('Steven')

    });    

    it('should return the employee id', ()=> {
        expect(engineer.getID()).toEqual('21')
    });

    it('should return the employee email', ()=> {
        expect(engineer.getEmail()).toEqual('skchung93@gmail.com')
    });

    it('should return the github username of the engineer', ()=> {
        expect(engineer.getGithub()).toEqual('@skchung93')
    });

    it('should return the employee role', ()=> {
        expect(engineer.getRole()).toEqual('Engineer')
    });



})