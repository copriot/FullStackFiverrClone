import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
// Configuration
cloudinary.config({
  cloud_name: "dzll13nv4",
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// Upload an image
const upload = async (
  file_path: string,
  folder: string,
  type: "image" | "video" | "raw" | "auto" | undefined = "auto",
  width?: number,
  height?: number,
  crop?: string,
  quality?: string
) => {
  return await cloudinary.uploader.upload(file_path, {
    folder,
    resource_type: type,
    width,
    height,
    crop,
    quality,
  });
};
export default upload;
