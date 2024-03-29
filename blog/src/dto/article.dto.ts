import { Request } from "express";

export interface IArticleDto {
  title: string;
  content: string;
}

export function ArticleDto(req: Request): IArticleDto {
  return {
    title: req.body.title,
    content: req.body.content,
  };
}
