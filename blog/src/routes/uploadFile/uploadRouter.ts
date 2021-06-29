import express from "express";
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single("image");;
import ModelMulter from './ModelMulter';
import uploadController from './uploadController';
import { NextFunction, Request, Response } from "express";

import { uploadSingle } from "../../config/cloudinary";
router.post('/',ModelMulter.single('image'),uploadController.uploadSingle)
export default router