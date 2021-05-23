class NewController {
    //[get]/news
    index(rep,res){
        res.render('news');
    }
    //[get]/new/:slug
    show(rep,res){
        res.send("new detail!!!");
    }
}
//tao 1 the hien cua newcontroller
module.exports =new NewController;