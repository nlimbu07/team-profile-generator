const Engineer = require('../lib/Engineer');

test('creates new Engineer object', () => {
  const engineer = new Engineer('William', 1, 'william@yahoo.com', 'william');

  expect(typeof engineer).toBe('object');
});

test('get engineer name', () => {
  const engineer = new Engineer('William', 1, 'william@yahoo.com', 'william');

  expect(engineer.name).toBe('William');
});

test('creates engineer id', () => {
  const engineer = new Engineer('William', 1, 'william@yahoo.com', 'william');

  expect(engineer.id).toEqual(expect.any(Number));
});

test('get engineer email', () => {
  const engineer = new Engineer('William', 1, 'william@yahoo.com', 'william');

  expect(engineer.email).toBe('william@yahoo.com');
});

test('get engineer github', () => {
  const engineer = new Engineer('William', 1, 'william@yahoo.com', 'william');

  expect(engineer.getGithub()).toBe('william');
});

test('creates engineer role', () => {
  const engineer = new Engineer();

  expect(engineer.getRole()).toBe('Engineer');
});
