import newsRouter from './news'
import articleRouter from './article'
import siteRouter from './site'
import AuthRouter from './Auth'
import express from 'express';
const router = express.Router();
//const authMidderware = require('../middleware/auth.middleware');
import { authRequired, authNotRequired } from '../middleware/auth.middleware';
router.use('/news',newsRouter);
router.use('/auth',AuthRouter);
router.use('/articles',articleRouter);
router.use('/',siteRouter);

export default router;