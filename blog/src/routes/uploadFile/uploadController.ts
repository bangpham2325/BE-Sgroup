
import express from "express";

import { NextFunction, Request, Response } from "express";
// declare module 'express' {
//     interface Request {
//       body: any // Actually should be something like `multer.Body`
//       files: any // Actually should be something like `multer.Files`
//     }
//   }
interface MulterRequest extends Request {
    file: any;
}
import { uploadSingle } from "../../config/cloudinary";
class UploadController {
    uploadSingle = async (req: Request, res:Response)=>{
        //req.file.path chính là đường dẫn của file khi upload bằng multer
            // const upload = await uploadSingle(req.file.path).then((result:any) => {
            //     let imageDetails = {
            //         imageName: req.body.imageName || '',
            //         cloudImage: result.url,
            //         imageId: result.id
            //     }
            // })
            console.log(req.file)
            return res.status(200).json({
                src: "path.secure_url"
            })
            
    }
}
export default new UploadController();
