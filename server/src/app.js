import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import "./config/db.js";

const app = express();

app.use(cors({ origin: "http://127.0.0.1:5173", credentials: true }));
app.use(express.json());
app.use("/assets", express.static("assets"));

app.use(routes);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
