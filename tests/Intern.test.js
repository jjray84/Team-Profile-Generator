const Employee = require('./employee');
const Intern = require('./lib/intern.js');

describe('Intern', () => {
  it('creates an instance with the given name, id, email, and school', () => {
    const intern = new Intern('Jamie Poissant', 3, 'jpoi@gmail.com', 'UCF');
    expect(intern.getName()).toEqual('Jamie Poissant');
    expect(intern.getId()).toEqual(2);
    expect(intern.getEmail()).toEqual('jpoi@gmail.com');
    expect(intern.getSchool()).toEqual('UCF');
  });

  it('has the role "Intern"', () => {
    const intern = new Intern('Jamie Poissant', 3, 'jpoi@gmail.com', 'UCF');
    expect(intern.getRole()).toEqual('Intern');
  });
});