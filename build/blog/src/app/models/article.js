"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ArticleSchema = new mongoose_1.Schema({
    title: String,
    url: String,
    src: String,
    content: String
});
var ArticleModel = mongoose_1.model('articles', ArticleSchema);
module.exports = ArticleModel;
