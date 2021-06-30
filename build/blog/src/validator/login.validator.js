"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = void 0;
var login_dto_1 = require("../dto/login.dto");
var REGEX_VALIDATE_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var REGEX_VALIDATE_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
function validateLogin(req, res, next) {
    var user = login_dto_1.LoginDto(req);
    if (!validateWithRegex(REGEX_VALIDATE_EMAIL, user.email.trim())) {
        return res.render("error.pug", {
            error: "Email not in right format",
        });
    }
    if (!validateWithRegex(REGEX_VALIDATE_PASSWORD, user.password.trim())) {
        return res.render("error.pug", {
            error: "Password not in right format. Password must contain minimum eight characters, at least one letter and one number",
        });
    }
    next();
}
exports.validateLogin = validateLogin;
function validateWithRegex(regex, value) {
    return regex.test(value);
}
// import  {check} from 'express-validator';
// import {validationResult} from 'express-validator';
// export function validateLogin(){
//   return [ 
//     check('user.email', 'Invalid does not Empty').not().isEmpty(),
//     check('user.email', 'Invalid email').isEmail(),
//     check('user.password', 'password more than 6 degits').isLength({ min: 6 })
//   ]; 
// }
