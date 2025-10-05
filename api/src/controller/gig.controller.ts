import { NextFunction } from "express";
import e from "../utils/error";
import c from "../utils/catch-async";
import upload from "../utils/cloudinary";
import { ExtendedFiles, Filters, Query } from "../types";
import { Gig } from "../model/gig.model";
import User from "../model/user.model";

const buildFilters = (query: Query): Filters => {
  const filters: Filters = {};

  if (query.category) filters.category = query.category;
  if (query.userId) filters.user = query.userId;

  if (query.min || query.max) {
    filters.package_price = {};
    if (query.min) filters.package_price.$gte = query.min;
    if (query.max) filters.package_price.$lte = query.max;
  }

  if (query.search) filters.title = { $regex: query.search, $options: "i" };
  return filters;
};

export const getAllGigs = c(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const filters = buildFilters(req.query);

    const gigs = await Gig.find(filters).populate("user", "username profilePicture");

    if (gigs.length === 0)
      return next(e(404, "Aranılan kriterlere uygun hizmet bulunamadı"));

    res.status(200).json({
      message: "Hizmet verileri alındı",
      results: gigs.length,
      gigs,
    });
  }
);

export const getGig = c(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const gig = await (await Gig.findById(req.params.id)).populate("user");

    if (!gig) return next(e(404, "gigs did not found that you searched"));
    res.status(200).json({ message: "Gig data taken", gig });
    next(e(400, "Error detail information"));
  }
);

export const createGig = c(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.isSeller) return next(e(403, "Only seller account can create a gig "));
    const files = req.files as unknown as ExtendedFiles;
    const coverImage = await upload(
      next,
      files.coverImage[0].path,
      "gig-images",
      900,
      300,
      "fill",
      "80"
    );
    const promises = files.images.map((image) =>
      upload(next, image.path, "gig-images", 900, 300, "fill", "80")
    );
    const images = await Promise.all(promises);

    //resimleri req.body e ekle
    req.body.coverImage = coverImage.secure_url;
    req.body.images = images.map((image) => image.secure_url);
    req.body.package_features = req.body.package_features.split(",");

    const savedGig = await Gig.create({ ...req.body, user: req.userId });

    res.status(200).json({
      message: "Gig data occured",
      gig: savedGig,
      files: { coverImage, images },
    });
  }
);

export const updateGig = c(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.status(200).json({
      message: "Gig data updated",
    });
    next(e(400, "Error detail information"));
  }
);

export const deleteGig = c(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const removedGig = await Gig.findById(req.params.id);

    if (!removedGig) return next(e(404, "unknown gig"));
    if (String(removedGig.user) !== req.userId)
      return next(e(403, "Unauthorized action"));
    await Gig.findByIdAndDelete(removedGig);
    res.status(200).json({ message: "Gig removed", removedGig });
    next(e(400, "Error detail information"));
  }
);
