import { model, Schema } from "mongoose";
import { defaultProfile } from "../utils/constants.js";

export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  country: string;
  isSeller: boolean;
  phone?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter your username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email address"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
    profilePicture: {
      type: String,
      default: defaultProfile,
    },
    country: {
      type: String,
      required: [true, "Please enter your country"],
    },
    isSeller: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      //client'a gönderilen verileri responstan cevaptan kaldır
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete (ret as any).password;
        delete (ret as any).__v;
        delete (ret as any)._id;
        return ret;
      },
    },
  }
);

const User = model<IUser>("User", UserSchema);

export default User;
