"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateArticle = void 0;
var article_dto_1 = require("../dto/article.dto");
var REGEX_VALIDATE_TITLE = /[0-9a-zA-Z\.\,\s]{10,}/;
var REGEX_VALIDATE_CONTENT = /^.{50,}$/;
function validateArticle(req, res, next) {
    var article = article_dto_1.ArticleDto(req);
    if (!validateWithRegex(REGEX_VALIDATE_TITLE, article.title.trim())) {
        return res.render("error.pug", {
            error: "Title not in right format, title can only contain digits and alphabet letters with length at least 10",
        });
    }
    if (!validateWithRegex(REGEX_VALIDATE_CONTENT, article.content.trim())) {
        return res.render("error.pug", {
            error: "Content not in right format, content with length at least 50",
        });
    }
    next();
}
exports.validateArticle = validateArticle;
function validateWithRegex(regex, value) {
    return regex.test(value);
}
