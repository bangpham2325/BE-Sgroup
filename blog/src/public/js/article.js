const reader = new FileReader();
document.querySelector("#image").addEventListener("change", (event) => {
	// Lấy thông tin tập tin được đăng tải
	const files  = event.target.files;
	// for(const file of files) {
	// 	const {name, type, size, lastModified } = file;
	// 	// Làm gì đó với các thông tin trên
		
    // }
	// Đọc thông tin tập tin đã được đăng tải
	reader.readAsDataURL(files[0])
	
	// Lắng nghe quá trình đọc tập tin hoàn thành
	reader.addEventListener("load", (event) => {
		// Lấy chuỗi Binary thông tin hình ảnh
		const img = event.target.result;
        document.querySelector("#preview_img").src=img;
	})
})
document.querySelector('#Article').addEventListener('submit', async function(event) {
    event.preventDefault();
    const data = new FormData();
    const title = document.getElementById('title').value;
    const  content = document.getElementById('content').value;
    const image = document.getElementById("image");
    data.append("image", image.files[0]);
    let postImageRes = await fetch("http://localhost:3000/articles/upload", {
        method: "POST",
        body: data,
      });
    let link="";
    if (!postImageRes.ok) {
        postImageRes.json().then((r) => alert(r.message));
        return;
      } else {
        let upload = await postImageRes.json();
        link = upload.link;
      }
      const response = await fetch('http://localhost:3000/articles/create' , {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            content,
            link
        })
    });
    if (!response.ok) {
        res.json().then((r) => alert(r.message));
      } else {
        alert("Success");
        location.href = "/home";
        return;
      }
})