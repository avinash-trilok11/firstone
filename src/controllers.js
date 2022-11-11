const uuid = require("uuid");
var CryptoJS = require("crypto-js");
const Users = require("./models");
var jwt = require("jsonwebtoken");
const { response } = require("express");
var privateKey = "avinash";

const registerNewUser = async (req, res) => {
  var data = req.body;
  console.log(data);
  data.uniqueId = uuid.v4();

  var encPassword = CryptoJS.AES.encrypt(
    data.Password,
    data.uniqueId
  ).toString();

  data.Password = encPassword;

  var newUser = Users(data);
  var response = await newUser.save();
  return res.json(response);
};

const getAllUser = (req, res) => {
  Users.find().then((users) => {
    return res.json(users);
  });
};

const getOneUser = (req, res) => {
  var userId = req.query._id;
  Users.findById(userId).then((response) => {
    response.uniqueId = undefined;
    return res.json(response);
  });
};

const deleteOneUser = (req, res) => {
  var userId = req.query._id;
  Users.findByIdAndDelete(userId).then((response) => {
    return res.json({ status: "Deleted", user: response });
  });
};

const updateOneUser = (req, res) => {
  var userId = req.query._id;
  var data = req.body;

  Users.findByIdAndUpadate(userId, data).then((response) => {
    return res.json({ status: "Updated", user: response });
  });
};

const loginUser = async (req, res) => {
  var data = req.body;
  var user = await Users.findOne({ username: data.username });

  if (user === null) {
    return res.json({ status: false, msg: "you entered wrong username" });
  }

  var dePass = CryptoJS.AES.decrypt(user.Password, user.uniqueId).toString(
    CryptoJS.enc.Utf8
  );

  if (dePass !== data.Password) {
    return res.json({ status: false, msg: "you entered wrong password" });
  }

  var token = jwt.sign({ username: user.username, _id: user._id }, privateKey);

  user.uniqueId = undefined;
  user.Password = undefined;

  return res.json({ status: true, data: user, token: token });
};

const isAuthenticated = async (req, res) => {
  var userToken = req.query.token;
  var user = jwt.verify(userToken, privateKey);
  if (user) {
    user = await Users.findById(user._id);
    user.Password = undefined;
    user.uniqueId = undefined;
    return res.json({ status: true, data: user });
  } else {
    return res.json({ status: false });
  }
};

module.exports = {
  registerNewUser,
  getAllUser,
  getOneUser,
  deleteOneUser,
  updateOneUser,
  loginUser,
  isAuthenticated,
};
