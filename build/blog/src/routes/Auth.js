"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var AuthController_1 = __importDefault(require("../app/controllers/AuthController"));
var router = express_1.default.Router();
//newController.index
router.get('/login', AuthController_1.default.logout);
router.post('/login', AuthController_1.default.getLogin);
router.get('/', AuthController_1.default.login);
exports.default = router;
