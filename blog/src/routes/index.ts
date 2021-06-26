import newsRouter from './news'
import articleRouter from './article/articleRouter'
import siteRouter from './site'
import AuthRouter from './Auth/authRouter'
import UploadRouter from './uploadFile/uploadRouter'
import express from 'express';
const router = express.Router();
const {
    authRequired,
    authNotRequired,
  } = require("../middleware/auth.middleware");
router.use('/news',authRequired,newsRouter);
router.use('/auth',authNotRequired,AuthRouter);
router.use('/articles',articleRouter);
router.use('/articles',UploadRouter);
router.use('/',authRequired,siteRouter);

export default router;