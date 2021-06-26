const UserModel = require('../../app/models/user')
const SessionModel = require('../../app/models/session')
const bcrypt = require('bcrypt')

import { NextFunction, Request, Response } from "express";
class AuthController {
    //[get]/login
    login(req: Request, res: Response, next: NextFunction){
       // console.log(req.cookies)
        res.render('login');
    }
    getLogin = async (req: Request, res: Response, next: NextFunction) => {

      const user = await UserModel.findOne({
        username: req.body.email,
      });
      
      if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
        return res.render("error.pug", {
          error: `Email and Password not found to login`,
        });
      }
    
      const currentUserSession = await SessionModel.findOne({
        "user._id": user._id,
      });
    
      if (currentUserSession?.lock) {
        return res.render("error", {
          error: "Have some user using this account",
        });
      }
    
      const userInfomation = {
        _id: user._id,
        username: user.username,
      };
    
      const session = await SessionModel.create({
        user: userInfomation,
        lock: true,
      });
    
      res.cookie("userId", session._id,{
        httpOnly:true,
        signed:true,
        maxAge : 100*1000
      })
      res.redirect('/home');
       
    }
    logout = async(req: Request, res: Response)=>{
     
      console.log("Im logging out");
      
      const { sessionId } = req.signedCookies;
      console.log(sessionId);
      
      if (sessionId) {
          await SessionModel.deleteOne({
              _id: sessionId
          })
          return res.status(203).json({});
      }
      return res.status(400).json({
          message: 'Can not logout'
      });
      
          
    }
}
//tao 1 the hien cua newcontroller
export default new AuthController();