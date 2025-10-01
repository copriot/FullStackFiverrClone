import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { LoginReq, RegisterReq } from "../types";
import User from "../model/user.model";
import jwt from "jsonwebtoken";
import upload from "../utils/cloudinary";
import c from "../utils/catch-async";
import e from "../utils/error";
const register = c(
  async (req: RegisterReq, res: Response, next: NextFunction): Promise<void> => {
    const hashedPass: string = bcrypt.hashSync(req.body.password, 12);
    const image = await upload(
      next,
      req.file?.path as string,
      "avatars",
      "auto",
      200,
      200,
      "fill"
    );

    const newUser = await User.create({
      ...req.body,
      password: hashedPass,
      profilePicture: image.secure_url,
    });
    next(e(404, "User registered"));
    res.status(200).json({ message: "User registered", data: newUser });
  }
);

const login = c(
  async (req: LoginReq, res: Response, next: NextFunction): Promise<void> => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return next(e(404, "Could not find username"));
    }

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);

    const token = jwt.sign(
      { id: user._id, isSeller: user.isSeller },
      process.env.JWT_KEY as string,
      {
        expiresIn: Number(process.env.JWT_EXPIRES) as number,
      }
    );

    if (!isCorrect) {
      return next(e(404, "Wrong password"));
    }

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      expires: new Date(Date.now() + 14 * 24 * 3600 * 1000), // 14 gün
    });

    res.json({ message: "Logged in", user });
  }
);

const logout = c(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res
      .clearCookie("token", {
        httpOnly: true,
        path: "/", // burayı ekle, cookie sadece path eşleşirse silinir
        secure: false, // localhost için false, prod’da true olabilir
        sameSite: "lax",
      })
      .status(200)
      .json({
        message: "Logged out from your account",
      });
  }
);

const getProfile = c(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.userId) {
      return next(e(401, "Unauthorized"));
    }

    const user = await User.findById(req.userId);
    if (!user) {
      return next(e(401, "Unauthorized"));
    }

    res.status(200).json({ message: "Profile fetched", user });
  }
);

export { register, login, logout, getProfile };
