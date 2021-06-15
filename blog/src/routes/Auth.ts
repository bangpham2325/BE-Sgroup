import express from "express";
import AuthController from '../app/controllers/AuthController';
const router = express.Router();
//newController.index
const {
    authRequired,
    authNotRequired,
  } = require("../middleware/auth.middleware");
  const UserModel = require('../app/models/user');
  import {validateLogin} from "../validator/login.validator"
  

router.post('/login',validateLogin,AuthController.getLogin);
router.get('/login',AuthController.login);
router.get('/logout',AuthController.logout);
export default router