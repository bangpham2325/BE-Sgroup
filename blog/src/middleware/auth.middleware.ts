import { NextFunction, Request, Response } from "express";
import SessionModel from '../app/models/session';
import UserModel from '../app/models/user';
export const authRequired =async (req: Request, res: Response, next: NextFunction) =>  {
   
        // const { user: sessionId } = req.signedCookies;
        
       console.log(req.cookies + "  "+ req.signedCookies.userId+" ne")
        if(!req.signedCookies.userId){
            res.redirect('/auth/login')
            return;
        }
        const user = UserModel.default.findOne({id: req.cookies.userId});
        if(!user){
            res.redirect('/auth/login');
            return;
        }
         //console.log(req.cookies+": "+req.signedCookies)
    //   if (!sessionId) {
    //     return res.redirect("/auth/login");
    //   }
      return next();
    
    
}
export const authNotRequired =function(req: Request, res: Response, next: NextFunction) {
   
    // const { user: sessionId } = req.signedCookies;
   
    if(req.signedCookies.userId){
        res.redirect('/home')
        return;
    }
    
     //console.log(req.cookies+": "+req.signedCookies)
//   if (!sessionId) {
//     return res.redirect("/auth/login");
//   }
  return next();


}