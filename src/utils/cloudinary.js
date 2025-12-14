
import fs from 'fs';

import { v2 as cloudinary } from 'cloudinary';

   // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_CLOUD_KEY,
        api_secret: process.env.CLOUDINARY_CLOUD_SECRET // Click 'View API Keys' above to copy your API secret
    });

    const uploadOnCloudary=async (localFilePath)=>{
        try{

            if(!localFilePath) return null
            // upload the file on cloudinary 
           const response=await cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto"
                // chahe pdf ,.mp4,.mp3 .docx kuch bhi

            })
            // file has been successfully uploaded
            console.log("file is uploaded on clodinary ",response.url)
            return response
        }catch(error){
            fs.unlinkSync(localFilePath)
            // remove the locally saved temporary file as the upload operation 
            // got failed 
            return null
        }
    }

    export {uploadOnCloudary} 



// (async function() {

 
    
//     // Upload an image
//      const uploadResult = await cloudinary.uploader
//        .upload(
//            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//                public_id: 'shoes',
//            }
//        )
//        .catch((error) => {
//            console.log(error);
//        });
    
//     console.log(uploadResult);
    
//     // Optimize delivery by resizing and applying auto-format and auto-quality
//     const optimizeUrl = cloudinary.url('shoes', {
//         fetch_format: 'auto',
//         quality: 'auto'
//     });
    
//     console.log(optimizeUrl);
    
//     // Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url('shoes', {
//         crop: 'auto',
//         gravity: 'auto',
//         width: 500,
//         height: 500,
//     });
    
//     console.log(autoCropUrl);    
// })();