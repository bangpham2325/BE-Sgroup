import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT || 3000;
export const COOKIE_SECRET = process.env.COOKIE_SECRET || 'bang';
export const DB_CONNECTION = process.env.DB_CONNECTION || 'mongodb://localhost:27017/Article';
export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME || 'bangpham';
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || '837869445163677';
export const CLOUDINARY_API_SECRECT = process.env.CLOUDINARY_API_SECRECT  || 'dulA88W9xEtQNBMSkE5PVKqIc88';
