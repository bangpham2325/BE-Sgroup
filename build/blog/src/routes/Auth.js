"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var AuthController_1 = __importDefault(require("../app/controllers/AuthController"));
var router = express_1.default.Router();
//newController.index
var _a = require("../middleware/auth.middleware"), authRequired = _a.authRequired, authNotRequired = _a.authNotRequired;
var UserModel = require('../app/models/user');
var login_validator_1 = require("../validator/login.validator");
router.post('/login', login_validator_1.validateLogin, AuthController_1.default.getLogin);
router.get('/login', AuthController_1.default.login);
router.get('/logout', AuthController_1.default.logout);
exports.default = router;
