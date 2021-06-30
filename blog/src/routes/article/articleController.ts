
import Article from '../../app/models/article';
import { NextFunction, Request, Response } from "express";

class ArticleController {
   
    
    //[get]/show
    getDetailBySlugPage = async (req: Request, res: Response, next: NextFunction)=>{
   
        const article = await Article.findOne({title:req.params.slug})
        if(!article){
            return res.render('error',{
                error: 'Not Found article with title' + req.params.slug
            })
        }
        return res.render('Article/show', {
            article
        })
        
    }
    //get/article/create
    createNewArticlePage = (req: Request, res: Response, next: NextFunction) => {
        return res.render('create');
        
    }
    //post/articles/store
    storeArticle = async (req: Request, res: Response, next: NextFunction)=>{
       let creatSuccess = true;
       const articleExister = await Article.findOne({title :req.body.title})
   
       if(articleExister){
            return res.render('error')
       }
       try{
           await Article.create(req.body)
       } catch(err){
        console.log(err)
        creatSuccess = false;
       }
       return creatSuccess ? res.redirect('/home') :res.render('error',{
        error: `This article with title ${req.body.title} has been existed`
    })
       
    }
     //get/article/id/edit
    editArticleById = async (req: Request, res: Response, next: NextFunction)=>{
        const article = await Article.findOne({title:req.params.id})
        if(!article){
            return res.render('error',{
                error: 'Not Found article with title' + req.params.id
            })
        }
        return res.render('edit', {
            article
        })
    }
    //[put]artircle/title
    updateArticle = async (req: Request, res: Response, next: NextFunction)=>{
        const article = await Article.findOne({title: req.params.slug});

        if (!article) {
            return res.render('pages/error.pug', {
                error: `This article with title ${req.params.slug} is not exist`
            });
        }
        try{
            await Article.updateOne({title: req.params.slug},req.body)
        }catch(error){
            console.log(error);
            return res.render('error',{
                error: 'Not Update Article'
            })
        }
        return res.redirect('/home')
    }
    deleteArticle = async(req: Request, res: Response)=>{
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
export default new ArticleController();