import { NextFunction, Request, Response } from "express";
import { IArticleDto, ArticleDto } from "../dto/article.dto";
const REGEX_VALIDATE_TITLE = /[0-9a-zA-Z\.\,\s]{10,}/
const REGEX_VALIDATE_CONTENT = /^.{50,}$/
export function validateArticle(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let article: IArticleDto = ArticleDto(req);
  if (!validateWithRegex(REGEX_VALIDATE_TITLE,article.title.trim())) {
    return res.render("error.pug", {
      error: `Title not in right format, title can only contain digits and alphabet letters with length at least 10`,
    });
  }
  if (!validateWithRegex(REGEX_VALIDATE_CONTENT,article.content.trim())) {
    return res.render("error.pug", {
      error: `Content not in right format, content with length at least 50`,
    });
  }
  next();
}
function validateWithRegex(regex: RegExp, value: string){
  return regex.test(value)
}

