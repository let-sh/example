import express from "express";
const app = express();

if (!process.env.PORT) {
  console.error("Please set env PORT.");
  process.exit(1);
}

const port = +process.env.PORT!;
app.get("/", (_req, res) => res.send("Hello Oasis!"));
app.get("/env", (_req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(process.env));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
