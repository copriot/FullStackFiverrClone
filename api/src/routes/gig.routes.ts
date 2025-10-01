import express from "express";
import upload from "../utils/multer";
import {
  getAllGigs,
  getGig,
  createGig,
  updateGig,
  deleteGig,
} from "../controller/gig.controller";
import protect from "../middlewares/protect";

const router = express.Router();
router
  .route("/")
  .get(getAllGigs)
  .post(
    protect,
    upload.fields([
      { name: "coverImage", maxCount: 1 },
      { name: "images", maxCount: 6 },
    ]),
    createGig
  );

router.route("/:id").get(getGig).delete(protect, deleteGig).patch(protect, updateGig);

export default router;
