import {v2} from 'cloudinary';
import { CLOUDINARY_NAME , CLOUDINARY_API_KEY , CLOUDINARY_API_SECRECT } from '../env'
v2.config({
  cloud_name: CLOUDINARY_NAME,
  api_key:  CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRECT ,
  secure: true
  });

  export const cloudinary = v2.uploader;