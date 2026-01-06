// import  supabase from './config.js';

// const fileInput = document.getElementById('fileInput');
// const uploadbtn = document.getElementById('uploadbtn');
// const maindiv = document.getElementById('main');
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

//         console.log('File uploaded successfully:', fileUrl);   
//     }
//     if (error) {
//         console.error('Error uploading file:', error.message);
//     }
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



