const newsRouter = require('./news');
const articleRouter = require('./article');
const siteRouter = require('./site');
function route(app){
    
      app.use('/news',newsRouter);
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