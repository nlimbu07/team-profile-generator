const Intern = require('../lib/Intern');

test('creates new Intern object', () => {
  const intern = new Intern('Gajen', 2, 'gajen@yahoo.com', 'OSU');

  expect(typeof intern).toBe('object');
});

test('creates Intern name', () => {
  const intern = new Intern('Gajen', 2, 'gajen@yahoo.com', 'OSU');

  expect(intern.name).toBe('Gajen');
});

test('creates Intern id', () => {
  const intern = new Intern('Gajen', 2, 'gajen@yahoo.com', 'OSU');

  expect(intern.id).toEqual(expect.any(Number));
});

test('creates Intern email', () => {
  const intern = new Intern('Gajen', 2, 'gajen@yahoo.com', 'OSU');

  expect(intern.email).toBe('gajen@yahoo.com');
});

test('creates Intern school', () => {
  const intern = new Intern('Gajen', 2, 'gajen@yahoo.com', 'OSU');

  expect(intern.getSchool()).toBe('OSU');
});

test('creates Intern role', () => {
  const intern = new Intern();

  expect(intern.getRole()).toBe('Intern');
});
