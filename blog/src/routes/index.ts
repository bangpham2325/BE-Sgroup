import newsRouter from './news'
import articleRouter from './article'
import siteRouter from './site'
import AuthRouter from './Auth'
import express from 'express';
const router = express.Router();
const {
    authRequired,
    authNotRequired,
  } = require("../middleware/auth.middleware");
router.use('/news',authRequired,newsRouter);
router.use('/auth',authNotRequired,AuthRouter);
router.use('/articles',articleRouter);
router.use('/',authRequired,siteRouter);

export default router;