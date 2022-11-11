const mongoose = require("mongoose");

const dbconnect = mongoose.createConnection(
  "mongodb+srv://avinash:avinash11@guntupalli.eokenx3.mongodb.net/?retryWrites=true&w=majority"
);

dbconnect.on("connected", () => {
  console.log("DB CONNECT");
});

dbconnect.on("error", () => {
  console.log("Error");
});

module.exports = dbconnect;
