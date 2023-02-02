const Employee = require('./lib/employee.js');

describe('Employee', () => {
  it('creates an instance with the given name, id, and email', () => {
    const employee = new Employee('Mark Fullton', 1, 'mfullton@gmail.com');
    expect(employee.getName()).toEqual('Mark Fullton');
    expect(employee.getId()).toEqual(1);
    expect(employee.getEmail()).toEqual('mfullton@gmail.com');
  });

  it('has the role "Employee"', () => {
    const employee = new Employee('Mark Fullton', 1, 'mfullton@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
  });
});


