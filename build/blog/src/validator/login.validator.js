"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = void 0;
var login_dto_1 = require("../dto/login.dto");
function validateLogin(req, res, next) {
    var user = login_dto_1.LoginDto(req);
    if (!validateEmail(user.email.trim())) {
        return res.render("error.pug", {
            error: "Email not in right format",
        });
    }
    if (!validatePassword(user.password.trim())) {
        return res.render("error.pug", {
            error: "Password not in right format. Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 digit with length at least 6",
        });
    }
    next();
}
exports.validateLogin = validateLogin;
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validatePassword(password) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
    return re.test(password);
}
