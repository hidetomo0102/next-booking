import nc from "next-connect";
import { dbConnect } from "../../../config/dbConnect";

import {
  createNewRoom,
  getAllRooms,
} from "../../../controllers/roomControllers";

const handler = nc();

dbConnect();

handler.get(getAllRooms);
handler.post(createNewRoom);

export default handler;
