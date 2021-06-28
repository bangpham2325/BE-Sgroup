'use strict'
// document.querySelector("#image").addEventListener("change", (event) => {
//   // Lấy thông tin tập tin được đăng tải
//   const reader = new FileReader();
// 	const files  = event.target.files;
	
// 	// Đọc thông tin tập tin đã được đăng tải
// 	reader.readAsDataURL(files[0])
	
// 	// Lắng nghe quá trình đọc tập tin hoàn thành
// 	reader.addEventListener("load", (event) => {
// 		// Lấy chuỗi Binary thông tin hình ảnh
// 		const img = event.target.result;
//         document.querySelector("#preview_img").src=img;
// 	})
// })
document.getElementById('image').addEventListener('change', async function(e) {
  const previewImg = document.getElementById('previewImg');
  const form = new FormData();
  const image = document.getElementById("image");
    form.append("image", image.files[0]);
  //form.append('image', image.files[0])
console.log(form)
  const response = await fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: form
  })


  if (!response.ok) {
      alert('Upload failed')
  } else {
      const {src} = await response.json();
      previewImg.src = src;
      return;
  }
})