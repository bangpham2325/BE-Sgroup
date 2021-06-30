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
var article_1 = __importDefault(require("../../app/models/article"));
var ArticleController = /** @class */ (function () {
    function ArticleController() {
        var _this = this;
        //[get]/show
        this.getDetailBySlugPage = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var article;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, article_1.default.findOne({ title: req.params.slug })];
                    case 1:
                        article = _a.sent();
                        if (!article) {
                            return [2 /*return*/, res.render('error', {
                                    error: 'Not Found article with title' + req.params.slug
                                })];
                        }
                        return [2 /*return*/, res.render('Article/show', {
                                article: article
                            })];
                }
            });
        }); };
        //get/article/create
        this.createNewArticlePage = function (req, res, next) {
            return res.render('create');
        };
        //post/articles/store
        this.storeArticle = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var creatSuccess, articleExister, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        creatSuccess = true;
                        return [4 /*yield*/, article_1.default.findOne({ title: req.body.title })];
                    case 1:
                        articleExister = _a.sent();
                        if (articleExister) {
                            return [2 /*return*/, res.render('error')];
                        }
                        console.log("2" + article_1.default + "  " + req.body.title);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, article_1.default.create(req.body)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.log(err_1);
                        creatSuccess = false;
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, creatSuccess ? res.redirect('/home') : res.render('error', {
                            error: "This article with title " + req.body.title + " has been existed"
                        })];
                }
            });
        }); };
        //get/article/id/edit
        this.editArticleById = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var article;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, article_1.default.findOne({ title: req.params.id })];
                    case 1:
                        article = _a.sent();
                        if (!article) {
                            return [2 /*return*/, res.render('error', {
                                    error: 'Not Found article with title' + req.params.id
                                })];
                        }
                        return [2 /*return*/, res.render('edit', {
                                article: article
                            })];
                }
            });
        }); };
        //[put]artircle/title
        this.updateArticle = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var article, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, article_1.default.findOne({ title: req.params.slug })];
                    case 1:
                        article = _a.sent();
                        if (!article) {
                            return [2 /*return*/, res.render('pages/error.pug', {
                                    error: "This article with title " + req.params.slug + " is not exist"
                                })];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, article_1.default.updateOne({ title: req.params.slug }, req.body)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, res.render('error', {
                                error: 'Not Update Article'
                            })];
                    case 5: return [2 /*return*/, res.redirect('/home')];
                }
            });
        }); };
        this.deleteArticle = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, article, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, article_1.default.findOne({ id: id })];
                    case 1:
                        article = _a.sent();
                        if (!article) {
                            return [2 /*return*/, res.render("error.pug", {
                                    error: "This article with title " + id + " is not exist",
                                })];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, article_1.default.deleteOne({ id: id })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [2 /*return*/, res.render("error.pug", {
                                error: "This article with title " + req.body.title + " has been deleted",
                            })];
                    case 5: return [2 /*return*/, res.redirect("/home")];
                }
            });
        }); };
    }
    return ArticleController;
}());
//tao 1 the hien cua newcontroller
exports.default = new ArticleController();
