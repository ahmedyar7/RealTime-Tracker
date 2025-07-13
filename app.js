require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`✅ Server is Running on http://localhost:${process.env.PORT}`);
});
