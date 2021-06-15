"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Article = require('../models/article');
var SiteController = /** @class */ (function () {
    function SiteController() {
    }
    //[get]/news
    SiteController.prototype.home = function (req, res, next) {
        Article.find({})
            .then(function (articles) { return res.render('home', {
            articles: articles
        }); })
            .catch(next);
    };
    //[get]/new/:slug
    SiteController.prototype.search = function (req, res, next) {
        res.render('search');
    };
    return SiteController;
}());
//tao 1 the hien cua newcontroller
exports.default = new SiteController;
