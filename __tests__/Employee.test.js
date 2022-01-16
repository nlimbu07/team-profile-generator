const Employee = require('../lib/Employee');

test('creates new employee object', () => {
  const employee = new Employee('Niraj', 0, 'niraj@yhoo.com');

  expect(typeof employee).toBe('object');
});

test('get employee name', () => {
  const employee = new Employee('Niraj', 1, 'niraj@yahoo.com');

  expect(employee.name).toBe('Niraj');
});

test('creates employee id', () => {
  const employee = new Employee('Niraj', 1, 'niraj@yahoo.com');

  expect(employee.id).toEqual(expect.any(Number));
});

test('get employee email', () => {
  const employee = new Employee('Niraj', 1, 'niraj@yahoo.com');

  expect(employee.email).toBe('niraj@yahoo.com');
});

test('creates employee role', () => {
  const employee = new Employee();

  expect(employee.getRole()).toBe('Employee');
});
