const express = require('express');
const router = express.Router();
const  articleController = require('../app/controllers/ArticleController');


//newController.index
router.get('/create',articleController.create)
router.post('/store',articleController.store)
router.get('/:slug',articleController.show)

 module.exports = router