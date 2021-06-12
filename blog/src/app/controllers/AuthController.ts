const UserModel = require('../models/user')
const SessionModel = require('../models/session')
const bcrypt = require('bcrypt')
import { NextFunction, Request, Response } from "express";
class AuthController {
    //[get]/login
    login(req: Request, res: Response, next: NextFunction){
        console.log(req.cookies)
        res.render('login');
    }
    async postLogin(req: Request, res: Response, next: NextFunction){
        // const user = UserModel.findOne({
        //     username: req.body.email
        // });
        const user= await UserModel.default.findOne({username: req.body.email})
        if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
            res.send("Loi roi");
            return;
        }  
        const currentUserSession = await SessionModel.findOne({
            'user._id' : user._id, 
        });
        // if (currentUserSession?.lock) {
        //     return res.send("da co nguoi dung dang nhap")
        // }
          const userInfomation = {
            _id: user._id,
            username: user.username,
          };
          
          const session =await SessionModel.create({
            user: userInfomation,
            lock: true,
          });
          console.log(session)
        console.log(user)
        res.cookie("userId", session._id,{
            httpOnly:true,
            signed:true,
            maxAge : 100*1000
        })
        res.redirect('/home');
    
          
          
          //res.redirect("/home");
       
    }
    async logout(req: Request, res: Response, next: NextFunction){
     
            const {userId: sessionId } = req.signedCookies;
            console.log("hellooooooo"+sessionId);
            if (sessionId) {
                await SessionModel.deleteOne({
                    _id: sessionId
                })
                res.cookie("userId", "dangnhaproi", {
                    maxAge: 0,
                  });
                return res.status(203).json("logout thanh cong");
            }

            return res.redirect("/auth");
          
    }
}
//tao 1 the hien cua newcontroller
export default new AuthController;