import { connect, connection, Error } from "mongoose";

export const dbConnect = (): void => {
  if (connection.readyState > 1) {
    return;
  }
  // ローカル起動時は開発用のDBを使用
  const uri = process.env.DB_LOCAL_URI;

  if (!uri) {
    console.log("DB URI is not set");
    return;
  }

  connect(uri);
};
