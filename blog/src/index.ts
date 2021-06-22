import express from 'express';
import pug from 'pug';
import path from 'path';
import router from './routes';
import db from './config/database';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser'

const PUBLIC_PATH = path.join(__dirname, 'public');


//const authMidderware = require('./middleware/auth.middleware');
const {PORT, COOKIE_SECRET} = require('./env');
//connect db
db();
const app = express()
const port = 3000
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
//Khai báo đường dẫn đến thư mục chứa các template
app.set('views', path.join(__dirname,'resources/views'))
//Khai báo templateEngine sử dụng
app.set('view engine', 'pug')
app.get('/user/:id', function (req, res, next) {
  res.send('USER')
})
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))
app.use(express.static(PUBLIC_PATH, {
  etag: true,
  cacheControl: true,
  maxAge: 8000
}));
app.use(cookieParser("asasasas"))
//app.use(methodOverride('_method'))

app.use('/', router);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:3000`)
})