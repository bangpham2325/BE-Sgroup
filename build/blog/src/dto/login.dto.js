"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDto = void 0;
function LoginDto(req) {
    return {
        email: req.body.email,
        password: req.body.password,
    };
}
exports.LoginDto = LoginDto;
