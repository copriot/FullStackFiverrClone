import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import e from "../middlewares/errorHandler";
const protect = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;
  if (!token) {
    return next(e(403, "Token did not found"));
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as {
      id: string;
      isSeller: boolean;
    };

    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    console.log("User from token:", payload);
    next();
  } catch (err) {
    next(e(401, "Unauthorized token"));
  }
};

export default protect;
