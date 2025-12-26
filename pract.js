// import { supabase } from './config.js';

// const fileInput = document.getElementById('fileInput');
// const uploadbtn = document.getElementById('uploadbtn');

// let fileUrl ;

// async function btn (e) {
//   e.preventDefault()
//   const fileName = fileInput.files[0].name
//   const file = fileInput.files[0]


//   const { data, error } = await supabase
//   .storage
//     .from('uploadimage')
//     .upload(fileName, file);

//    if (data) {
//       fileUrl = data.path;

//      console.log('File uploaded successfully:', fileUrl)
//    }
//   else {
//       console.log('Error uploading file:', error)
//     }


//  const { data: urlData } = await supabase
//       .storage
//       .from('uploadimage')
//       .getPublicUrl(fileUrl);

//     if (urlData) {
//       console.log(urlData)
//       console.log(urlData.publicUrl)

//       const { error } = await supabase
//   .from('uploadimage')
//   .insert({ url: urlData.publicUrl})
//   getPic() 
//     }
  
// }

// uploadbtn.addEventListener('click', btn);




// async function getAllPics (){
//   try {
//    const { data, error } = await supabase
//   .from('uploadimage')
//   .select('*')
//   if(data){
//    console.log(data);
//    data.forEach(pic => {
//       main.innerHTML +=`<div><img src='${pic.imageUrl}'></div>`
      
//    });
   
//   }
   
//   } catch (error) {
//    console.log(error);
   
//   }
// }

// getAllPics()
import { supabase } from './config.js';

 async function btn(e) {
  e.preventDefault();

  const file = fileInput.files[0];
  if (!file) return alert("Please select a file!");

  const fileName = `${Date.now()}_${file.name}`;

  // Upload to storage
  const { data, error } = await supabase
    .storage
    .from('uploadimage')
    .upload(fileName, file);

  if (error) {
    console.log("Error uploading file:", error);
    return;
  }

  const fileUrl = data.path;

  // Get public URL
  const urlData = supabase
    .storage
    .from('uploadimage')
    .getPublicUrl(fileUrl);

  console.log("Public URL:", urlData.publicUrl);

  // Insert URL into database
  const { error: dbError } = await supabase
    .from('images')  // your DB table
    .insert({ imageUrl: urlData.publicUrl });

  if (dbError) console.log("DB Insert Error:", dbError);

  getAllPics();
}
uploadbtn.addEventListener('click', btn);
