import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import cookieParser from "cookie-parser";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Veri Tabanı baglantısı❤️😘"))
  .catch((error) => console.log("DB HataHata", error));

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server dinlenmeye basladı😍");
});
