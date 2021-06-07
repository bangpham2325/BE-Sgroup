const express = require('express');
const router = express.Router();
const  siteController = require('../app/controllers/SiteController');

const authMidderware = require('../middleware/auth.middleware');
//newController.index
router.use('/home',authMidderware.authRequired,siteController.home)
router.use('/search',siteController.search);

module.exports = router