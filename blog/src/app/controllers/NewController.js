const SessionModel = require('../models/session')
class NewController {
    //[get]/news
    index(rep,res){
        res.render('news');
    }
    //[get]/new/:slug
    show(rep,res){
        res.send("new detail!!!");
    }
    // showSession(rep,res,next){
    //     SessionModel.find({})
    //     .then(session =>res.render('session', {
    //         session
    //     }))
    //     .catch(next)
    // }
}

//tao 1 the hien cua newcontroller
module.exports =new NewController;