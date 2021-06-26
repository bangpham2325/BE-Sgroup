
import express from "express";
import newsController from '../app/controllers/newController';

const router = express.Router();

//newController.index


router.get('/:slug',newsController.show)
router.get('/',newsController.index);

export default router