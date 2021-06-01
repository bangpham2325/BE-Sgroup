const Article = require('../models/article');
class ArticleController {
    
    //[get]/show
    show(rep,res,next){
        
        Article.findOne({title:rep.params.slug})
        .then(article =>res.render('Article/show', {
            article
        }))
        .catch(next)
        
    }
    //get/article/create
    create(rep,res){
        res.render('create');
        
    }
    //post/articles/store
    store(req,res){
       const formData = req.body;
       const article = new Article(formData);
       article.save()
       .then(()=>res.redirect('/home'))
       .catch(error =>{

       })
    }
     //get/article/id/edit
    edit(rep,res,next){
        Article.findOne({title:rep.params.id})
        .then(article =>res.render('edit', {
            article
        }))
        .catch(next)
        
        
    }
    //[put]artircle/title
    update(rep,res,next){
        Article.updateOne({title: rep.params.slug},rep.body)
        .then(()=>res.redirect("/home"))
        .catch(next)
    }
}
//tao 1 the hien cua newcontroller
module.exports =new ArticleController;