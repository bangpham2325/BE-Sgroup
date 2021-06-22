
const Article = require('../models/article');
import { NextFunction, Request, Response } from "express";
import { UploadStream } from "cloudinary";

import { uploadToCloud } from "../../config/cloudinary";

class ArticleController {
    upload =(req: Request, res: Response, next: NextFunction)=>{
        // (async (req: any) => {
        //       if (!req.file) {
        //         next(new Error('No file uploaded!'));
        //         return;
        //       }
             
        //       res.json({ secure_url: req.file.path });
            
        // })(req);
        console.log('req.body :', req.body);
    }
    
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
        const { id } = req.params;
        const article = await Article.findOne({ id });
        if (!article) {
            return res.render("error.pug", {
                error: `This article with title ${id} is not exist`,
            });
        }

        try {
            await Article.deleteOne({ id });
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