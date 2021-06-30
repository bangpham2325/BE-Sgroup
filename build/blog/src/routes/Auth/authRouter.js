"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authController_1 = __importDefault(require("./authController"));
var router = express_1.default.Router();
//newController.index
var _a = require("../../middleware/auth.middleware"), authRequired = _a.authRequired, authNotRequired = _a.authNotRequired;
var login_validator_1 = require("../../validator/login.validator");
var express_validator_1 = require("express-validator");
router.post('/login', login_validator_1.validateLogin, function (req, res, next) {
    var errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }
    next();
}, authController_1.default.getLogin);
router.get('/login', authController_1.default.login);
router.get('/logout', authController_1.default.logout);
exports.default = router;
