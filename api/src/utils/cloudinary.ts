import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { NextFunction } from "express";
import e from "../utils/error";
dotenv.config();
// Configuration
cloudinary.config({
  cloud_name: "dzll13nv4",
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// Upload an image
const upload = async (
  next: NextFunction,
  file_path: string,
  folder: string,
  width?: number,
  height?: number,
  crop?: string,
  quality?: string,
  type: "image" | "video" | "raw" | "auto" | undefined = "auto"
) => {
  return await cloudinary.uploader.upload(
    file_path,
    {
      folder,
      resource_type: type,
      width,
      height,
      crop,
      quality,
    },
    (error) => {
      if (error) return next(e(400, "Photos didnt upload"));
    }
  );
};
export default upload;
