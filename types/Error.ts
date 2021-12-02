import { Error } from "mongoose";

export type CustomError = {
  statusCode: number;
  path?: string;
} & Error;
