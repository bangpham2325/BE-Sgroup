"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var article_1 = __importDefault(require("../models/article"));
var ArticleController = /** @class */ (function () {
    function ArticleController() {
    }
    //[get]/show
    ArticleController.prototype.show = function (req, res, next) {
        article_1.default.findOne({ title: req.params.slug })
            .then(function (article) { return res.render('Article/show', {
            article: article
        }); })
            .catch(next);
    };
    //get/article/create
    ArticleController.prototype.create = function (req, res, next) {
        res.render('create');
    };
    //post/articles/store
    ArticleController.prototype.store = function (req, res, next) {
        var formData = req.body;
        var article = new article_1.default(formData);
        article.save()
            .then(function () { return res.redirect('/home'); })
            .catch(function (error) {
        });
    };
    //get/article/id/edit
    ArticleController.prototype.edit = function (req, res, next) {
        article_1.default.findOne({ title: req.params.id })
            .then(function (article) { return res.render('edit', {
            article: article
        }); })
            .catch(next);
    };
    //[put]artircle/title
    ArticleController.prototype.update = function (req, res, next) {
        article_1.default.updateOne({ title: req.params.slug }, req.body)
            .then(function () { return res.redirect("/home"); })
            .catch(next);
    };
    return ArticleController;
}());
//tao 1 the hien cua newcontroller
exports.default = new ArticleController;
