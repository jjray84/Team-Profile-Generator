const Employee = require('./employee');
const Manager = require('./Manager');

describe('Manager', () => {
  it('creates an instance with the given name, id, email, and office number', () => {
    const manager = new Manager('Dwayne Johnson', 4, 'therock@wwe.com', '001');
    expect(manager.getName()).toEqual('Dwayne Johnson');
    expect(manager.getId()).toEqual(4);
    expect(manager.getEmail()).toEqual('therock@wwe.com');
    expect(manager.getGithub()).toEqual('001');
  });

  it('has the role "Manager"', () => {
    const manager = new Manager('Dwayne Johnson', 2, 'therock@wwe.com', '001');
    expect(manager.getRole()).toEqual('Manager');
  });
});