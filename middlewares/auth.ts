import { getSession } from "next-auth/client";
import { Request, Response } from "../types/auth/Session";

import ErrorHandler from "../utils/errorHandler";
import catchAsyncError from "./catchAsyncError";

export const isAuthenticatedUser = catchAsyncError(
  async (req: Request, res: Response, next: any) => {
    const session = await getSession({ req });

    if (!session) {
      return next(new ErrorHandler("Login first to access resource", 401));
    }

    req.user = session.user;
    next();
  }
);

// Handling user roles
export const authorizeRoles = (role: string) => {
  return (req: Request, res: Response, next: any) => {
    if (req.user?.role == role) {
      return next(
        new ErrorHandler(
          `Role(${req.user.role}) is not allowed to access this resource.`,
          403
        )
      );
    }
    next();
  };
};
