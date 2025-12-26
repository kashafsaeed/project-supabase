import { supabase } from './config.js';

// const fileInput = document.getElementById('fileInput');
// const uploadbtn = document.getElementById('uploadbtn');
// const main = document.getElementById('main');
// let fileUrl;

// async function btn (e) {
//     e.preventDefault();
//   const fileName = fileInput.files[0].name
//   const file = fileInput.files[0]

//   const { data, error } = await supabase
//   .storage
//     .from('uploadimage')
//     .upload(fileName, file);

//    if (data) {
//       fileUrl = data.path

//     //     console.log('File uploaded successfully:', fileUrl);   
//     // }
//     // if (error) {
//     //     console.error('Error uploading file:', error.message);
//     // }

//    const { data:urlData } = supabase
//    .storage
//    .from('uploadimage')
//    .getPublicUrl(fileUrl)

//   if (urlData) {
//     console.log('Public URL:', urlData);
//     console.log('public url:', urlData.publicUrl);
//     const { error } = await supabase
//     .from('images')
//     .insert([{ image_url: urlData.publicUrl }]);

//   }
//   if (error) {
//     console.error('Error inserting URL into database:', error.message);
//   }else {
//     console.log('Image URL inserted into database successfully');
//   }


  
// }
// else { 
//      console.error('Error uploading file:', error);
// }
// }


// uploadbtn.addEventListener('click', btn);


// async function fetchImages() {
//     try {
//     const { data, error } = await supabase
//       .from('images')
//       .select('*');
//       if (data) {
//         console.log('Fetched images:', data);
//         data.forEach(image => {
//              main.innerHTML +=`<div><img src='${pic.imageUrl}'></div>`
            
            
//         });
//       }
//     }catch (error) {
//         console.error('Error fetching images:', error.message);
//     }
// }
// fetchImages();


// async function btn(e) {
//   e.preventDefault();

//   const file = fileInput.files[0];
//   if (!file) return alert("Please select a file!");

//   const fileName = `${Date.now()}_${file.name}`;

//   // Upload to storage
//   const { data, error } = await supabase
//     .storage
//     .from('uploadimage')
//     .upload(fileName, file);

//   if (error) {
//     console.log("Error uploading file:", error.message);
//     return;
//   }

//   const fileUrl = data.path;

//   // Get public URL
//   const urlData = supabase
//     .storage
//     .from('uploadimage')
//     .getPublicUrl(fileUrl);

//   console.log("Public URL:", urlData.publicUrl);

//   // Insert URL into database
//   const { error: dbError } = await supabase
//     .from('uploadimage')  // your DB table
//     .insert({ imageUrl: urlData.publicUrl });

//   if (dbError) console.log("DB Insert Error:", dbError);

//   getAllPics();
// }
// uploadbtn.addEventListener('click', btn);




uploadBtn.onclick = async () => {
  const file = img.files[0];
  if (!file) return alert("Select image");

  const name = Date.now() + file.name;

  const { data } = await supabase
    .storage.from("images")
    .upload(name, file);

  const { data:url } = supabase
    .storage.from("images")
    .getPublicUrl(data.path);

  await supabase.from("pics").insert({ imageUrl: url.publicUrl });
  loadPics();
};

async function loadPics() {
  main.innerHTML = "";
  const { data } = await supabase.from("pics").select("imageUrl");
  data.forEach(p => main.innerHTML += `<img src="${p.imageUrl}" width="150">`);
}

loadPics();

