const {
  registerNewUser,
  getAllUser,
  getOneUser,
  deleteOneUser,
  updateOneUser,
  loginUser,
  isAuthenticated,
} = require("./src/controllers");
const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const cors = require("cors");
const router = require("./src/router");
const dbconnect = require("./src/db");

server.use(cors());
server.use(bodyParser.json());

server.use("/api", router);

server.listen(4003, () => {
  console.log("server started....");
});
