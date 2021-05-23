const Article = require('../models/article');
class SiteController {
    
    //[get]/news
    home(rep,res,next){
        Article.find({})
        .then(articles =>res.render('home', {
            articles
        }))
        .catch(next)
        
    }
    //[get]/new/:slug
    search(rep,res){
        res.render('search');
    }
}
//tao 1 the hien cua newcontroller
module.exports =new SiteController;