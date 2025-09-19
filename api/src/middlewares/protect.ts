import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const protect = (req: Request, res: Response, next: NextFunction) => {
  //
  const token = req.headers.authorization?.split("")[1] || req.cookies.token;

  if (!token) {
    res.status(403).json({ message: "Unvalid token" });
    return;
  }

  jwt.verify(token, process.env.JWT_KEY as string, (err: any, payload: any) => {
    if (err) {
      res.status(403).json({ message: "Unauthorizated token" });
      return;
    }

    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    console.log(payload);
  });

  next();
};

export default protect;
