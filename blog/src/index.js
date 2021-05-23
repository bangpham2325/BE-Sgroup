const express = require('express')
const pug = require('pug');
const path = require('path')
const route = require('./routes')
const db = require('./config/database');

//connect db
db.connect();
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
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})