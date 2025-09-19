import express from "express";
import { getProfile, login, logout, register } from "../controller/auth.controller";
import protect from "../middlewares/protect";
import upload from "../utils/multer";

const router = express.Router();

router.route("/register").post(upload.single("profilePicture"), register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile").get(protect, getProfile);

export default router;
