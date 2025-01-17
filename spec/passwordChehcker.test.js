// spec/passwordChecker.test.js

const { passwordChecker, passwordSpecialCharChecker, passwordDigitChecker, passwordNoIPLChecker } = require('../src/passwordChecker');

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

describe('Password Digit Validation', () => {
  it('should contain at least one digit', () => {
    expect(passwordDigitChecker('longenough')).toBe(false);
    expect(passwordDigitChecker('long3nough')).toBe(true);
  });
});

describe('Password No IPL Validation', () => {
  it('should not contain the string "IPL" in any case', () => {
    expect(passwordNoIPLChecker('longenough')).toBe(true);
    expect(passwordNoIPLChecker('longIPL')).toBe(false);
    expect(passwordNoIPLChecker('longipl')).toBe(false);
  });
});
