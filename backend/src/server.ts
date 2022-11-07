import http from "http";
import { MONOGODB_URI, PORT } from "./config/server.config";
import { app } from "./app";
import { connectDB } from "./DB/connectDB";
const server = http.createServer(app);

async function startServer() {
  try {
    await connectDB(MONOGODB_URI);
    console.log("connection to DB Succeeded");

    server.listen(PORT, () => {
      console.log(`server is runing on port ${PORT}.....`);
    });
  } catch (error) {
    console.log(error);
  }
}
startServer();
