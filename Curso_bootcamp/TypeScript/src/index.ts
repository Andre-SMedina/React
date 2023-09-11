import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Home" });
});

app.listen(3333);
