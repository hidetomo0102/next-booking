import { IncomingMessage } from "http";

export interface GetRoomsProps {
  req: IncomingMessage;
  currentPage: number;
  location?: string | string[];
  guests?: string | string[];
  category?: string | string[];
}

export interface GetRoomDetailsProps {
  req: IncomingMessage;
  id?: string | string[];
}

export interface ReviewData {
  rating: number;
  comment: string;
  roomId: string | string[];
}
