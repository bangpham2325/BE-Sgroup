"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SessionModel = require('../models/session');
var NewController = /** @class */ (function () {
    function NewController() {
    }
    //[get]/news
    NewController.prototype.index = function (req, res) {
        res.render('news');
    };
    //[get]/new/:slug
    NewController.prototype.show = function (req, res) {
        res.send("new detail!!!");
    };
    return NewController;
}());
//tao 1 the hien cua newcontroller
exports.default = new NewController;
