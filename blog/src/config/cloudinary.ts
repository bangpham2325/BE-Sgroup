const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "du5x0bmau",
    api_key: "837869445163677",
    api_secret: "dulA88W9xEtQNBMSkE5PVKqIc88",
    secure: true,
  });
  
export function uploadSingle(file:any){
  return new Promise(resolve => {
      cloudinary.uploader.upload(file, {
              folder: 'single'
          })
          .then((result : any) => {
              if (result) {
                  const fs = require('fs')
                  fs.unlinkSync(file)
                  resolve({
                      url: result.secure_url
                  })
              }
          })
  })
}