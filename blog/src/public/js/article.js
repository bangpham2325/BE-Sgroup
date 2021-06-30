
const imageFile = document.getElementById("image");
imageFile.addEventListener('change', async (e) => {
  const form = new FormData();
  
    form.append("image", imageFile.files[0]);
  try{
    const response = await fetch('http://localhost:3000/upload', {
      method: 'post',
      body: form
    });
  if (!response.ok) {
      alert('Upload failed')
  } else {
      const {src} = await response.json();
      document.querySelector("#preview_img").src = await src;
      console.log(src)
      return;
  }
  }catch(err){
    console.log("loi roi"+err)
    return
  }
  
})
document.getElementById("Article").addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const src = document.getElementById('preview_img').src;
  
      const response = await fetch('http://localhost:3000/articles/store', {
          method: 'POST',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              title,
              content,
              src
          }),
      });
      console.log(response);
      if (!response.ok) {
          alert('Create fail!!!');
      } else {
          location.href = '/home';
          alert('Register success')
          return;
      }
})