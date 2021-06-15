import { NextFunction, Request, Response } from "express";
import { IArticleDto, ArticleDto } from "../dto/article.dto";

export function validateArticle(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let article: IArticleDto = ArticleDto(req);
  if (!validateTitle(article.title.trim())) {
    return res.render("error.pug", {
      error: `Title not in right format, title can only contain digits and alphabet letters with length at least 10`,
    });
  }
  if (!validateContent(article.content.trim())) {
    return res.render("error.pug", {
      error: `Content not in right format, content with length at least 50`,
    });
  }
  next();
}

function validateTitle(title: string): boolean {
  const re = /[0-9a-zA-Z\.\,\s]{10,}/;
  return re.test(title);
}

function validateContent(content: string): boolean {
  const re = /^.{50,}$/;
  return re.test(content);
}
