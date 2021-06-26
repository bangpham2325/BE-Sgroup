"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var siteController_1 = __importDefault(require("../app/controllers/siteController"));
var router = express_1.default.Router();
//newController.index
router.get('/home', siteController_1.default.home);
router.get('/search', siteController_1.default.search);
exports.default = router;
