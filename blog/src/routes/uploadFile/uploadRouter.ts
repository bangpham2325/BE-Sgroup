import express from "express";
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single("image");;
import uploadController from './uploadController';
import { NextFunction, Request, Response } from "express";

import { uploadSingle } from "../../config/cloudinary";
router.post('/upload',multerUploads,(req: Request,res: Response)  =>{
    //req.file.path chính là đường dẫn của file khi upload bằng multer
       (async (req:any)=>{
        const upload = await uploadSingle(req.file.path).then((result:any) => {
            let imageDetails = {
                imageName: req.body.imageName || '',
                cloudImage: result.url,
                imageId: result.id
            }
        })
        
        res.json(req.file)
       } )(req);
        
})
export default router