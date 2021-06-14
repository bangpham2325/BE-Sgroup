import express from "express";
import AuthController from '../app/controllers/AuthController';
import { authRequired, authNotRequired } from '../middleware/auth.middleware';
const router = express.Router();
//newController.index
router.get('/login',AuthController.logout);
router.post('/login',AuthController.getLogin);
router.get('/',AuthController.login);
export default router