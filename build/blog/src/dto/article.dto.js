"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleDto = void 0;
function ArticleDto(req) {
    return {
        title: req.body.title,
        content: req.body.content,
    };
}
exports.ArticleDto = ArticleDto;
