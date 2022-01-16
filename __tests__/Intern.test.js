const Intern = require('../lib/Intern');

test('creates new intern object', () => {
  const intern = new Intern('Niraj', 1, 'niraj@yahoo.com', 'OSU');

  expect(typeof intern).toBe('object');
});

test('set intern school', () => {
  const intern = new Intern('Niraj', 1, 'niraj@yahoo.com', 'OSU');

  expect(intern.school).toBe('OSU');
});

test('get intern school', () => {
  const intern = new Intern('Niraj', 1, 'niraj@yahoo.com', 'OSU');

  expect(intern.getSchool()).toBe('OSU');
});

test('creates intern role', () => {
  const intern = new Intern();

  expect(intern.getRole()).toBe('Intern');
});
