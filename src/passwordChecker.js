// src/passwordChecker.js

function passwordChecker(password) {
    return password.length >= 8;
}

function passwordSpecialCharChecker(password) {
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharPattern.test(password);
}

module.exports = {
    passwordChecker,
    passwordSpecialCharChecker
};
