import express from "express";
const app = express();

if (!process.env.PORT) {
  console.error("Please set env PORT.");
  process.exit(1);
}

const port = +process.env.PORT!;
app.get("/", (_req, res) => res.send("Hello Oasis!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
