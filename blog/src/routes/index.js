const newsRouter = require('./news');
const articleRouter = require('./article');
const siteRouter = require('./site');
const AuthRouter = require('./Auth');
//const authMidderware = require('../middleware/auth.middleware');
function route(app){
    
      app.use('/news',newsRouter);
      app.use('/auth',AuthRouter);
      app.use('/articles',articleRouter);
      //app.get('/news', (req, res) => {
      //  res.render('news')
      //})
      // Action ---> Dispatcher -- Function handler
    //   app.get('/search', (req, res) => {
    //     res.render('search')
    //   })
    // app.get('/', (req, res) => {
    //     res.render('home')
    //   })
    app.use('/',siteRouter);
      
}
module.exports = route;