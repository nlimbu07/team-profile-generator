const Engineer = require('../lib/Engineer');

test('creates new Engineer object', () => {
  const engineer = new Engineer('Niraj', 1, 'niraj@yahoo.com', 'niraj07');

  expect(typeof engineer).toBe('object');
});

test('set engineer github', () => {
  const engineer = new Engineer('Niraj', 1, 'niraj@yahoo.com', 'niraj07');

  expect(engineer.github).toBe('niraj07');
});

test('get engineer github', () => {
  const engineer = new Engineer('Niraj', 1, 'niraj@yahoo.com', 'niraj07');

  expect(engineer.getGithub()).toBe('niraj07');
});

test('creates engineer role', () => {
  const engineer = new Engineer();

  expect(engineer.getRole()).toBe('Engineer');
});
