const express = require('express');
const router = express.Router();
const  newsController = require('../app/controllers/NewController');



//newController.index
router.get('/cookie',function(req,res,next){
    res.cookie('user_id',12345);
    res.send('hello');
})

router.use('/:slug',newsController.show)
router.use('/',newsController.index);

 module.exports = router