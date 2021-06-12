"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var news_1 = __importDefault(require("./news"));
var article_1 = __importDefault(require("./article"));
var site_1 = __importDefault(require("./site"));
var Auth_1 = __importDefault(require("./Auth"));
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.use('/news', news_1.default);
router.use('/auth', Auth_1.default);
router.use('/articles', article_1.default);
router.use('/', site_1.default);
exports.default = router;
