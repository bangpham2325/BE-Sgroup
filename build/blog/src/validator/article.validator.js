"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateArticle = void 0;
var article_dto_1 = require("../dto/article.dto");
function validateArticle(req, res, next) {
    var article = article_dto_1.ArticleDto(req);
    if (!validateTitle(article.title.trim())) {
        return res.render("error.pug", {
            error: "Title not in right format, title can only contain digits and alphabet letters with length at least 10",
        });
    }
    if (!validateContent(article.content.trim())) {
        return res.render("error.pug", {
            error: "Content not in right format, content with length at least 50",
        });
    }
    next();
}
exports.validateArticle = validateArticle;
function validateTitle(title) {
    var re = /[0-9a-zA-Z\.\,\s]{10,}/;
    return re.test(title);
}
function validateContent(content) {
    var re = /^.{50,}$/;
    return re.test(content);
}
