import { Request, Response } from "../types/auth/Session";

export default (func: Function) => (req: Request, res: Response, next: any) =>
  Promise.resolve(func(req, res, next)).catch(next);
