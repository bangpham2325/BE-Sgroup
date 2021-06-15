import { NextFunction, Request, Response } from "express";
const SessionModel = require('../app/models/session');
const UserModel = require('../app/models/user');
export const authRequired =async (req: Request, res: Response, next: NextFunction) =>  {
   
        // const { user: sessionId } = req.signedCookies;
        //console.log("dell log: "+req.signedCookies.userId)
        const { userId: sessionId } = req.signedCookies;
        if (!sessionId) {
            res.redirect("/auth/login");
            return;
        }
    
        // if(!req.signedCookies.userId){
        //     console.log("dell log tiep")
        //     res.redirect('/auth/login')
        //     return;
        //}
        const user = UserModel.findOne({id: req.cookies.userId});
        if(!user){
            console.log("dell log tiep nua")
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
   
    const { userId } = req.signedCookies;

    if (userId) return res.redirect("/home");

    return next();
    
     //console.log(req.cookies+": "+req.signedCookies)
//   if (!sessionId) {
//     return res.redirect("/auth/login");
//   }


}