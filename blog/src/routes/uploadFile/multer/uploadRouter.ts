import express from "express";
const router = express.Router();

import ModelMulter from './uploadModel';
import uploadController from './uploadController';
import { NextFunction, Request, Response } from "express";

router.post('/',ModelMulter.single('image'),uploadController.uploadSingle)
export default router