const Manager = require('../lib/Manager');

test('creates new manager object', () => {
  const manager = new Manager('Reena', 3, 'reena@yahoo.com', '123');

  expect(typeof manager).toBe('object');
});

test('get manager name', () => {
  const manager = new Manager('Reena', 3, 'reena@yahoo.com', '123');

  expect(manager.name).toBe('Reena');
});

test('creates manager id', () => {
  const manager = new Manager('Reena', 3, 'reena@yahoo.com', '123');

  expect(manager.id).toEqual(expect.any(Number));
});

test('get manager email', () => {
  const manager = new Manager('Reena', 3, 'reena@yahoo.com', '123');

  expect(manager.email).toBe('reena@yahoo.com');
});

test('creates manager officeNumber', () => {
  const manager = new Manager('Reena', 3, 'reena@yahoo.com', '123');

  expect(manager.officeNumber).toBe('123');
});

test('creates manager role', () => {
  const manager = new Manager();

  expect(manager.getRole()).toBe('Manager');
});
