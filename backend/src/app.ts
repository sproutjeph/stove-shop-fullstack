import cors from "cors";
import path from "path";
import express from "express";

const app = express();
import "express-async-errors";
app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

export { app };
