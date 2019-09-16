const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("API is up");
});

const userRouter = require("./users/users-router.js");
server.use("/users", userRouter);

module.exports = server;
