
import express from "express";
import { Request, Response } from 'express';

import {serviceUpload} from '../cloudinary/cloudinaryController';
class UploadController {
    uploadSingle = async (req: Request, res:Response)=>{
        //req.file.path chính là đường dẫn của file khi upload bằng multer
        try{
            const src= await serviceUpload.uploadSingle(req.file)
            return res.status(200).json({
                src
            })
        } catch(err){
            console.log("loi ne: "+err.message);
            return res.status(400).json(err);
        }   
        
            
    }
}
export default new UploadController();
