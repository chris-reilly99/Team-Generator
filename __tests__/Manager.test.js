// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Chris', 99, 'christopher.c.reilly@du.edu', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Chris', 99, 'christopher.c.reilly@du.edu');

    expect(manager.getRole()).toEqual("Manager");
}); 