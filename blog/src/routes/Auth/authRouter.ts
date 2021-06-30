import express from "express";
import AuthController from './authController';
const router = express.Router();
//newController.index
const {
    authRequired,
    authNotRequired,
  } = require("../../middleware/auth.middleware");
import UserModel from '../../app/models/user';
import {validateLogin} from "../../validator/login.validator"
import {validationResult} from 'express-validator';

router.post('/login',validateLogin,function (req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  next()
}
  ,AuthController.getLogin);
router.get('/login',AuthController.login);
router.get('/logout',AuthController.logout);
export default router