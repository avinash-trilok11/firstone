const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

let user = {
  id: "aviaviavi",
  email: "avinash11@gmail.com",
  password: "76tgby767t68eygb8778yuhjh8",
};

const JWT_SECRET = "some secret..";

app.get("/", (req, res) => {
  res.send("hello aliens");
});

app.get("/forgot-password", (req, res, next) => {
  res.render("forgot-password");
});

app.post("/forgot-password", (req, res, next) => {
  const { email } = req.body;

  //make sure user exist in db
  if (email !== user.email) {
    res.send("user not registered");
    return;
  }
  //user exist create one time password link valied for 15min
  const secret = JWT_SECRET + user.password;
  const payload = {
    email: user.email,
    id: user.id,
  };
  const token = jwt.sign(payload, secret, { expiresIn: "15m" });
  const link = `http://localhost:3000/reset-password/${user.id}/${token}`;
  console.log(link);
  res.send("password reset link has sent to your email");
});

app.get("/reset-password/:id/:token", (req, res, next) => {
  const { id, token } = req.params;

  // check if this id exist in database
  if (id !== user.id) {
    res.send("invalid id ");
    return;
  }
  // we have valid id, and we have a valid user with this id
  const secret = JWT_SECRET + user.password;
  try {
    const payload = jwt.verify(token, secret);
    res.render("reset-password", { email: user.email });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

app.post("/reset-password/:id/:token", (req, res, next) => {
  const { id, token } = req.params;
  const { password, password2 } = req.body;
  // checking if this id exis in db
  if (id !== user.id) {
    res.send("invalid id ");
    return;
  }
  const secret = JWT_SECRET + user.password;
  try {
    const payload = jwt.verify(token, secret);
    //validate password and password2 should match
    // we can find the user with payload email and update with new password
    // always hash the password before saving
    user.password = password;
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

app.listen(3000, () => console.log("http://localhost:3000"));
