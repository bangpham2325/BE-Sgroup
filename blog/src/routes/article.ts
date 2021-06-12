import express from "express";
import articleController from '../app/controllers/ArticleController';
const router = express.Router();


//newController.index
router.get('/create',articleController.create)
router.post('/store',articleController.store)
router.get('/:id/edit',articleController.edit)
router.put('/:slug',articleController.update)
router.get('/:slug',articleController.show)

 export default router