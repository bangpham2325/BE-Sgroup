
const Article = require('../models/article');
import { NextFunction, Request, Response } from "express";
class ArticleController {
    
    //[get]/show
    show =(req: Request, res: Response, next: NextFunction)=>{
        
        Article.findOne({title:req.params.slug})
        .then((article : any) =>res.render('Article/show', {
            article
        }))
        .catch(next)
        
    }
    //get/article/create
    create = (req: Request, res: Response, next: NextFunction) => {
        res.render('create');
        
    }
    //post/articles/store
    store(req: Request, res: Response, next: NextFunction){
       const formData = req.body;
       const article = new Article(formData);
       article.save()
       .then(()=>res.redirect('/home'))
       .catch((error:any) =>{

       })
    }
     //get/article/id/edit
    edit(req: Request, res: Response, next: NextFunction){
        Article.findOne({title:req.params.id})
        .then((article : any) =>res.render('edit', {
            article
        }))
        .catch(next) 
    }
    //[put]artircle/title
    update(req: Request, res: Response, next: NextFunction){
        Article.updateOne({title: req.params.slug},req.body)
        .then(()=>res.redirect("/home"))
        .catch(next)
    }
    delete = async(req: Request, res: Response)=>{
        const { slug } = req.params;
        const article = await Article.findOne({ slug });
        console.log("dang delete ")
        if (!article) {
            return res.render("error.pug", {
                error: `This article with title ${slug} is not exist`,
            });
        }

        try {
            await Article.deleteOne({ slug });
        } catch (error) {
            console.log(error);
            return res.render("error.pug", {
                error: `This article with title ${req.body.title} has been deleted`,
            });
        }

        return res.redirect("/home");
    }
}
//tao 1 the hien cua newcontroller
export default new ArticleController;