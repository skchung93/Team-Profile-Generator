const Intern = require('../lib/intern');

const intern = new Intern ('Steven', '21', 'skchung93@gmail.com', 'University of Washington');

describe( "Employee", () => {

    it('should return the employee name', ()=> {
        expect(intern.getName()).toEqual('Steven')

    });    

    it('should return the employee id', ()=> {
        expect(intern.getID()).toEqual('21')
    });

    it('should return the employee email', ()=> {
        expect(intern.getEmail()).toEqual('skchung93@gmail.com')
    });

    it('should return the github username of the engineer', ()=> {
        expect(intern.getSchool()).toEqual('University of Washington')
    });

    it('should return the employee role', ()=> {
        expect(intern.getRole()).toEqual('Intern')
    });



})