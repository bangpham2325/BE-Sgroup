const SessionModel = require('../app/models/session');
const UserModel = require('../app/models/user');
module.exports.authRequired =function(req, res, next) {
   
        // const { user: sessionId } = req.signedCookies;
        
       console.log(req.cookie + "  "+ req.signedCookies.userId+" ne")
        if(!req.signedCookies.userId){
            res.redirect('/auth/login')
            return;
        }
        const user = UserModel.findOne({id: req.cookies.userId});
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
module.exports.authNotRequired =function(req, res, next) {
   
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