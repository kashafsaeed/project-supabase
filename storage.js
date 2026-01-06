import supabase from "./config.js"


const fileInput = document.getElementById('fileInput');
const uploadbtn = document.getElementById('uploadbtn');
const main = document.getElementById('main');

let fileUrl;

async function btn(e) {
    e.preventDefault();
    const fileData = fileInput.files[0].name
    const file = fileInput.files[0]

     const { data, error } = await supabase
        .storage
        .from("profile")
        .upload(fileData, file);

    if (data) {
        fileUrl = data.path
        console.log('File uploaded successfully:', fileUrl);
    }
    if (error) {
        console.log(error);


    }
     const { data: urlData } = supabase
        .storage
        .from('profile') // bucket name
        .getPublicUrl(fileUrl);
    console.log('Public URL:', urlData.publicUrl);

    const { error : urlE } = await supabase
  .from("images")
  .insert({ imageurl : urlData.publicUrl }) // column name in supabase table imageurl

  async function fetchimg () {
    
  const { data: allData, error: allError } = await supabase
  .from("images")
  .select("*");
    console.log(allData);

     allData.forEach((item) => {
        main.innerHTML += `
    <div style="display:inline-block; margin:5px;">
    <img src='${item.imageurl}' style="width:100%; max-width:200px; height:auto; border-radius:8px;">
  </div> `
    });

  }

   

fetchimg();




}





uploadbtn.addEventListener('click', btn);



