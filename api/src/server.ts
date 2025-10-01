import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import cookieParser from "cookie-parser";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler";
import gigRoutes from "./routes/gig.routes";

dotenv.config();

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("✅ Veri Tabanı bağlantısı başarılı");

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server ${process.env.PORT} portunda dinlenmeye başladı`);
    });
  } catch (error) {
    console.error("❌ DB bağlantı hatası:", error);
    process.exit(1);
  }
};

startServer();

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/gigs", gigRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("Server dinlenmeye basladı😍");
});
