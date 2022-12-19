import express, { Application, Response } from "express";
import cors from "cors";
import route from "../Routes/route";

const app: Application = express();
const port: number | string = process.env.port || 2001;
app.use(express.json());
require("../Config/config");
app.all("/", (res: Response) => {
  res.json({
    message: "running",
  });
});

app.use(cors());
app.use("/api", route);

app.listen(port, () => {
  console.log("done on port", port);
});
