import { NextApiRequest, NextApiResponse } from "next";
import { CustomError } from "../types/Error";
import ErrorHandler from "../utils/errorHandler";

export default (
  err: CustomError,
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) => {
  err.statusCode = err.statusCode || 500;
  let error = { ...err };
  error.message = err.message;

  // Wrong Mongoose Object ID Error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    error = new ErrorHandler(message, 400);
  }

  // Handling mongoose Validation Error
  if (err.name === "ValidationError") {
    error = new ErrorHandler(err.message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};
