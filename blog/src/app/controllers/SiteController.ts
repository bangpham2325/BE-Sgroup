
const Article = require('../models/article');
import { NextFunction, Request, Response } from "express";
class SiteController {
    
    //[get]/news
    home(req: Request, res: Response, next: NextFunction){
        Article.find({})
        .then((articles:any) =>res.render('home', {
            articles
        }))
        .catch(next)
        
    }
    //[get]/new/:slug
    search(req: Request, res: Response, next: NextFunction){
        res.render('search');
    }
}
//tao 1 the hien cua newcontroller
export default new SiteController;