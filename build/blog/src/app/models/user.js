"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    username: String,
    password: String,
});
var UserModel = mongoose_1.model('users', UserSchema);
exports.default = UserModel;
