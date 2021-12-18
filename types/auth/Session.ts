import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";

export type CustomSession =
  | ({
      user?: {
        role?: string;
        _id?: string;
      };
    } & Session)
  | null;

export type Request = NextApiRequest & CustomSession;
export type Response = NextApiResponse & CustomSession;
