"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var article_1 = __importDefault(require("../models/article"));
var SiteController = /** @class */ (function () {
    function SiteController() {
    }
    //[get]/news
    SiteController.prototype.home = function (req, res, next) {
        article_1.default.find({})
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
