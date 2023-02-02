const Employee = require('./employee');
const Engineer = require('./lib/engineer.js');

describe('Engineer', () => {
  it('creates an instance with the given name, id, email, and github', () => {
    const engineer = new Engineer('Sophia Ray', 2, 'sray@gmail.com', 'sophiaray');
    expect(engineer.getName()).toEqual('Sophia Ray');
    expect(engineer.getId()).toEqual(2);
    expect(engineer.getEmail()).toEqual('sray@gmail.com');
    expect(engineer.getGithub()).toEqual('sophiaray');
  });

  it('has the role "Engineer"', () => {
    const engineer = new Engineer('Sophia Ray', 2, 'sray@gmail.com', 'sophiaray');
    expect(engineer.getRole()).toEqual('Engineer');
  });
});
