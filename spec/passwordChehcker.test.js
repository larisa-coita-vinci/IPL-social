// spec/passwordChecker.test.js

const { passwordChecker, passwordSpecialCharChecker } = require('../src/passwordChecker');

describe('Password Validation', () => {
  it('must be at least 8 characters long', () => {
    expect(passwordChecker('short')).toBe(false);
    expect(passwordChecker('longenough')).toBe(true);
  });
});

describe('Password Special Character Validation', () => {
  it('should contain at least one special character', () => {
    expect(passwordSpecialCharChecker('longenough')).toBe(false);
    expect(passwordSpecialCharChecker('long@enough')).toBe(true);
  });
});
