require("dotenv").config();

const express = require("express");
const app = express();
const http = require("http");
const socketio = require("socket.io");

const server = http.createServer(app);

const io = socketio(server);

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`✅ Server is Running on http://localhost:${process.env.PORT}`);
});
