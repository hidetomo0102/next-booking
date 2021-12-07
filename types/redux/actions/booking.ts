import { IncomingMessage } from "http";

export interface GetBookingDetailsProps {
  authCookie: string;
  req: IncomingMessage;
  id?: string | string[];
}
