"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinary = void 0;
var cloudinary_1 = require("cloudinary");
var env_1 = require("../env");
cloudinary_1.v2.config({
    cloud_name: env_1.CLOUDINARY_NAME,
    api_key: env_1.CLOUDINARY_API_KEY,
    api_secret: env_1.CLOUDINARY_API_SECRECT,
    secure: true
});
exports.cloudinary = cloudinary_1.v2.uploader;
