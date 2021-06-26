import express from "express";
import articleController from './articleController';
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single("image");;

//newController.index
router.get('/create',articleController.createNewArticlePage)
router.post('/upload',multerUploads,articleController.upload)
router.post('/store',articleController.storeArticle)
router.get('/:id/edit',articleController.editArticleById)
router.put('/:slug',articleController.updateArticle)
router.get('/:slug',articleController.getDetailBySlugPage)
router.delete('/:slug',articleController.deleteArticle)
 export default router