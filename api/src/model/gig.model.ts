import { Types, Schema, model } from "mongoose";

export interface IGig {
  _id: string;
  user: Types.ObjectId;
  title: string;
  description: string;
  reviewCount: number;
  starCount: number;
  category: string;
  coverImage: string;
  images: string[];
  package_title: string;
  package_description: string;
  package_price: string;
  package_features: string[];
  package_duration: number;
  package_revisions: number;
  createAt: string;
  updateAt: string;
}

const gigSchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    starCount: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    category: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    package_title: {
      type: String,
      required: true,
    },
    package_description: {
      type: String,
      required: true,
    },
    package_price: {
      type: String,
      required: true,
    },
    package_features: {
      type: [String],
      required: true,
    },
    package_duration: {
      type: Number,
      required: true,
      min: 1,
      max: 90,
    },
    package_revisions: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true } // createAt & updateAt otomatik ekler
);

export const Gig = model("Gig", gigSchema);
