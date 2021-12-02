import { connect, connection, Error } from "mongoose";

export const dbConnect = () => {
  if (connection.readyState > 1) {
    return;
  }
  const uri = process.env.DB_URI;

  if (!uri) {
    throw new Error("DB_URI is not set");
  }

  connect(uri);
};
