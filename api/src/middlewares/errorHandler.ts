import { NextFunction } from "express";

const errorHandler = (
  err: { status?: number; message?: string; stack?: string },
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errStatus: number = err.status || 500;
  const errMessage: string = err.message || "Unknown Error...";

  console.log("Error detail", {
    message: errMessage,
    status: errStatus,
    stack: err.stack,
  });

  res.status(errStatus).json({
    status: errStatus === 500 ? "error" : "fail",
    statusCode: errStatus,
    message: errMessage,
  });
  return;
};

export default errorHandler;
