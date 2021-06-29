import {NextFunction} from 'express';
import {Request, RequestHandler, Response} from 'express-serve-static-core';
import multer, {diskStorage, FileFilterCallback, Multer, MulterError} from 'multer';
const path =require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
const upload = multer({storage:storage}); //save trên local của server khi dùng multer

export default upload;