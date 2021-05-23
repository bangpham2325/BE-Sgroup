const express = require('express');
const router = express.Router();
const  siteController = require('../app/controllers/SiteController');


//newController.index
router.use('/home',siteController.home)
router.use('/search',siteController.search);

module.exports = router