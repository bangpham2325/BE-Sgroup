import express from "express";
import siteController from '../app/controllers/siteController';
const router = express.Router();

//newController.index
router.get('/home',siteController.home)
router.get('/search',siteController.search);

export default router;