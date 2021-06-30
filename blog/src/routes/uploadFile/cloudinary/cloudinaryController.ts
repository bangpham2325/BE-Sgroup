import {cloudinary} from '../../../config/cloudinary';
import {unlinkSync} from 'fs';
import { promises } from 'dns';

class Service{
    uploadSingle = async (file?: Express.Multer.File)=>{
        if(file == null){
            throw new Error('Null File')
        }
        console.log("heloo brus" +file.path)
        const response = await cloudinary.upload(file.path, {
            folder: 'uploads'
        })
        console.log("file ne"+response);
        unlinkSync(file.path);
        return response.secure_url;
  }
}
export const serviceUpload = new Service()