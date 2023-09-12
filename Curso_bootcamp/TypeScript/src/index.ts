import express from "express";
import { hello } from "./routes";

const app = express();

app.get("/", (hello) => {
  return hello;
});

app.listen(3333);
