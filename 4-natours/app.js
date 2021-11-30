const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.status(200).json({ message: "hello", app: "Natours" });
});

const port = 3000;

app.listen(port, () => {
  console.log("ok");
});
