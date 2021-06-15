"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var ArticleModel = require('../app/models/article');
var UserModel = require('../app/models/user');
exports.default = (function () { return __awaiter(void 0, void 0, void 0, function () {
    var DEFAULT_PWD, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                DEFAULT_PWD = bcrypt_1.default.hashSync('Aa123456', 10);
                return [4 /*yield*/, mongoose_1.default.connect('mongodb://localhost:27017/Article', {
                        useNewUrlParser: true,
                        useUnifiedTopology: true
                    })];
            case 1:
                _a.sent();
                console.log('connect to mongodb');
                return [4 /*yield*/, UserModel.deleteMany()];
            case 2:
                _a.sent();
                return [4 /*yield*/, UserModel.insertMany([
                        {
                            id: 12,
                            username: 'bangpham@gmail.com',
                            password: DEFAULT_PWD
                        },
                        {
                            id: 13,
                            username: 'bang@gmail.com',
                            password: DEFAULT_PWD
                        }
                    ])];
            case 3:
                _a.sent();
                return [4 /*yield*/, ArticleModel.deleteMany()];
            case 4:
                _a.sent();
                return [4 /*yield*/, ArticleModel.insertMany([
                        {
                            id: 1,
                            title: "Jennie",
                            slug: "jennie_xinh_gai",
                            url: 'https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/',
                            src: 'https://vcdn-giaitri.vnecdn.net/2021/02/24/j-4353-1614154422.jpg',
                            content: 'Web applications become more and more powerful every year, but there is still room for desktop apps with full access to the hardware of your computer. Today you can create desktop apps using the already familiar HTML, JS and Node.js, then package it into an executable file and distribute it accordingly across Windows, OS X and Linux.'
                        },
                        {
                            id: 2,
                            title: "Rose",
                            slug: "Rose",
                            url: 'https://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/',
                            src: 'https://kenh14cdn.com/thumb_w/660/2020/4/14/rose-1586871279171887574344.jpg',
                            content: 'Web applications become more and more powerful every year, but there is still room for desktop apps with full access to the hardware of your computer. Today you can create desktop apps using the already familiar HTML, JS and Node.js, then package it into an executable file and distribute it accordingly across Windows, OS X and Linux.'
                        },
                        {
                            id: 3,
                            title: "Lisa",
                            slug: "Lisa",
                            url: 'https://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/',
                            src: 'https://www.elleman.vn/wp-content/uploads/2020/03/26/174307/nu-ca-sy-lisa-blackpink-1.jpg',
                            content: 'Web applications become more and more powerful every year, but there is still room for desktop apps with full access to the hardware of your computer. Today you can create desktop apps using the already familiar HTML, JS and Node.js, then package it into an executable file and distribute it accordingly across Windows, OS X and Linux.'
                        },
                        {
                            id: 4,
                            title: "Jisoo",
                            slug: "Jisoo",
                            url: 'https://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/',
                            src: 'https://cdn.tgdd.vn//GameApp/-1//Jisoo-800x1200.jpg',
                            content: 'Web applications become more and more powerful every year, but there is still room for desktop apps with full access to the hardware of your computer. Today you can create desktop apps using the already familiar HTML, JS and Node.js, then package it into an executable file and distribute it accordingly across Windows, OS X and Linux.'
                        }
                    ])];
            case 5:
                _a.sent();
                return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                console.log(error_1);
                process.exit(1);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
