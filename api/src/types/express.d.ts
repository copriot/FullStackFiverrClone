import * as express from "express";

//express içerisindeki Request interface'inin içerisine yeni veriler (userId,isSeller) eklediğimizin için bu tanımla request interface'inin tipini genislettik
declare global {
  namespace Express {
    interface Request {
      headers: { authorization?: string } & Headers;
      cookies: { token?: string };
      userId: string;
      isSeller: boolean;
    }
  }
}
