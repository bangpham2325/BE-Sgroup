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
Object.defineProperty(exports, "__esModule", { value: true });
var Article = require('../models/article');
var ArticleController = /** @class */ (function () {
    function ArticleController() {
        var _this = this;
        this.upload = function (req, res, next) {
            // (async (req: any) => {
            //       if (!req.file) {
            //         next(new Error('No file uploaded!'));
            //         return;
            //       }
            //       res.json({ secure_url: req.file.path });
            // })(req);
            console.log('req.body :', req.body);
        };
        //[get]/show
        this.show = function (req, res, next) {
            Article.findOne({ title: req.params.slug })
                .then(function (article) { return res.render('Article/show', {
                article: article
            }); })
                .catch(next);
        };
        //get/article/create
        this.create = function (req, res, next) {
            res.render('create');
        };
        this.delete = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, article, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, Article.findOne({ id: id })];
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
                        return [4 /*yield*/, Article.deleteOne({ id: id })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, res.render("error.pug", {
                                error: "This article with title " + req.body.title + " has been deleted",
                            })];
                    case 5: return [2 /*return*/, res.redirect("/home")];
                }
            });
        }); };
    }
    //post/articles/store
    ArticleController.prototype.store = function (req, res, next) {
        var formData = req.body;
        var article = new Article(formData);
        article.save()
            .then(function () { return res.redirect('/home'); })
            .catch(function (error) {
        });
    };
    //get/article/id/edit
    ArticleController.prototype.edit = function (req, res, next) {
        Article.findOne({ title: req.params.id })
            .then(function (article) { return res.render('edit', {
            article: article
        }); })
            .catch(next);
    };
    //[put]artircle/title
    ArticleController.prototype.update = function (req, res, next) {
        Article.updateOne({ title: req.params.slug }, req.body)
            .then(function () { return res.redirect("/home"); })
            .catch(next);
    };
    return ArticleController;
}());
//tao 1 the hien cua newcontroller
exports.default = new ArticleController;
