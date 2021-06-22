"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToCloud = void 0;
var cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "du5x0bmau",
    api_key: "837869445163677",
    api_secret: "dulA88W9xEtQNBMSkE5PVKqIc88",
    secure: true,
});
function uploadToCloud(file) {
    return new Promise(function (resolve, reject) {
        cloudinary.uploader.upload(file, function (err, image) {
            if (err) {
                return reject(err, null);
            }
            else {
                return resolve(image.url, image.public_id);
            }
        });
    });
}
exports.uploadToCloud = uploadToCloud;
