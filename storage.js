import  supabase  from "./config.js";



const file = document.getElementById('fileInput');
const uploadbtn = document.getElementById('uploadbtn');

let fileUrl;

async function btn (e) {
    e.preventDefault();
  const fileName = file.files[0].name
  const filepath = file.files[0]
    const { data, error } = await supabase
    .storage
        .from('uploadimage')
        .upload(fileName, filepath);

   if (data) {
      fileUrl = data.path
        console.log('File uploaded successfully:', fileUrl);   
    }
    if (error) {
        console.log('Error uploading file:', error.message);
    }
}
  uploadbtn.addEventListener('click', btn);

//  console.log(supabase);
