
import SessionModel from '../models/session';
import { NextFunction, Request, Response } from "express";
class NewController {
    //[get]/news
    index(req: Request, res: Response){
        res.render('news');
    }
    //[get]/new/:slug
    show(req: Request, res: Response){
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
export default new NewController();