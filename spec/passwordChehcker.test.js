// spec/passwordChecker.test.js

const passwordChecker = require('../src/passwordChecker');

describe('Password Validation', () => {
  it('must be at least 8 characters long', () => {
    expect(passwordChecker('short')).toBe(false);
    expect(passwordChecker('longenough')).toBe(true);
  });
});