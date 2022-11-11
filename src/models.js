const mongoose = require("mongoose");
const dbconnect = require("./db");

const useSchema = mongoose.Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  uniqueId: String,
  age: String,
  phone: String,
  Gender: String,
  country: String,
  encPassword: String,
});
const Users = dbconnect.model("Users", useSchema);
module.exports = Users;
