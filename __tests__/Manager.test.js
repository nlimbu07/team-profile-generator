const Manager = require('../lib/Manager');

test('creates new manager object', () => {
  const manager = new Manager('Niraj', 1, 'niraj@yahoo.com', 1);

  expect(typeof manager).toBe('object');
});

test('creates manager officeNumber', () => {
  const manager = new Manager('Niraj', 1, 'niraj@yahoo.com', 1);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('creates manager role', () => {
  const manager = new Manager();

  expect(manager.getRole()).toBe('Manager');
});
