const express = require('express');
const router = express.Router();
const  AuthController = require('../app/controllers/AuthController');
const authMidderWare = require('../middleware/auth.middleware');
//newController.index
router.get('/login',AuthController.logout);
router.post('/login',AuthController.postLogin);
router.use('/',authMidderWare.authNotRequired,AuthController.login);

module.exports = router