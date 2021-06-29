"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var news_1 = __importDefault(require("./news"));
var articleRouter_1 = __importDefault(require("./article/articleRouter"));
var site_1 = __importDefault(require("./site"));
var authRouter_1 = __importDefault(require("./Auth/authRouter"));
var uploadRouter_1 = __importDefault(require("./uploadFile/uploadRouter"));
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var _a = require("../middleware/auth.middleware"), authRequired = _a.authRequired, authNotRequired = _a.authNotRequired;
router.use('/news', authRequired, news_1.default);
router.use('/auth', authNotRequired, authRouter_1.default);
router.use('/articles', articleRouter_1.default);
router.use('/upload', uploadRouter_1.default);
router.use('/', authRequired, site_1.default);
exports.default = router;
