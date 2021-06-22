var cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "du5x0bmau",
    api_key: "837869445163677",
    api_secret: "dulA88W9xEtQNBMSkE5PVKqIc88",
    secure: true,
  });
  
  export function uploadToCloud(file: any) {
    return new Promise((resolve: CallableFunction, reject: CallableFunction) => {
      cloudinary.uploader.upload(file, (err: Error, image: any) => {
        if (err) {
          return reject(err, null);
        } else {
          return resolve(image.url, image.public_id);
        }
      });
    });
  }