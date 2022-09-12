const express = require("express");
const app = express();

app.listen(5000, () => console.log("Server is listening!"));

app.get("/", (req, res) => {
  res.json({ status: "working" });
});
