import { Session } from "next-auth";

export type CustomSession =
  | ({
      user?: {
        role?: string;
      };
    } & Session)
  | null;
