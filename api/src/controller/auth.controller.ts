import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { LoginReq, RegisterReq } from "../types";
import User from "../model/user.model";
import jwt from "jsonwebtoken";
import upload from "../utils/cloudinary";
const register = async (req: RegisterReq, res: Response): Promise<void> => {
  const hashedPass: string = bcrypt.hashSync(req.body.password, 12);
  const image = await upload(
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

  res.status(200).json({ message: "User registered", data: newUser });
};

const login = async (req: LoginReq, res: Response): Promise<void> => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    res.status(404).json({ message: "could not find username" });
    return;
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
    res.status(404).json({ message: "Wrong password" });
    return;
  }

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    expires: new Date(Date.now() + 14 * 24 * 3600 * 1000), // 14 gün
  });

  res.json({ message: "Logged in", user });
};

const logout = async (req: Request, res: Response): Promise<void> => {
  res.clearCookie("token").status(200).json({
    message: "Logged out from you account",
  });
  res.json({ message: "Logged out successfully" });
};

const getProfile = async (req: Request, res: Response): Promise<void> => {
  const user = await User.findById(req.userId);

  if (!user) {
    res.status(404).json({ message: "User could not find" });
    return;
  }
  res.status(200).json({
    message: "Profil bilgisi geldi",
    user,
  });
  return;
};

export { register, login, logout, getProfile };
