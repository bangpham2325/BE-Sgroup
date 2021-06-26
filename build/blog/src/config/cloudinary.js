"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadSingle = void 0;
var cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "du5x0bmau",
    api_key: "837869445163677",
    api_secret: "dulA88W9xEtQNBMSkE5PVKqIc88",
    secure: true,
});
function uploadSingle(file) {
    return new Promise(function (resolve) {
        cloudinary.uploader.upload(file, {
            folder: 'single'
        })
            .then(function (result) {
            if (result) {
                var fs = require('fs');
                fs.unlinkSync(file);
                resolve({
                    url: result.secure_url
                });
            }
        });
    });
}
exports.uploadSingle = uploadSingle;
