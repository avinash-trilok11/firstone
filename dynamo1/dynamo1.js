var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var multer = require("multer");
var path = require("path");
const AWS = require("aws-sdk");

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Origin", "*");
  return next();
});

app.use(express.static(__dirname));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

AWS.config.update({
  region: "ap-south-1",
});

const DynamoDB = new AWS.DynamoDB();

//To insert the details into persons table
app.post("/adddata", function (req, res) {
  console.log(req.body);
  const params = {
    TableName: "dynamo1",
    Item: {
      customerid: { N: req.body.customerid },
      pnnumber: { N: req.body.pnnumber },
      deliveryofproduct: { N: req.body.deliveryofproduct },
      responsetime: { N: req.body.responsetime },
      productquality: { N: req.body.productquality },
      gasketingproductsquality: { N: req.body.gasketingproductsquality },
      customercommunications: { N: req.body.customercommunications },
      productknowledge: { N: req.body.productknowledge },
      desksales: { N: req.body.desksales },
      outsidesales: { N: req.body.outsidesales },
      countersales: { N: req.body.countersales },
      overallsatisfaction: { N: req.body.overallsatisfaction },
      productlike: { S: req.body.productlike },
      productdislike: { S: req.body.productdislike },
    },
  };

  DynamoDB.putItem(params, function (err, data) {
    if (err) {
      console.error("Unable to add person", err);
    } else {
      console.log(`Added with details`, data.Item);
      res.json(data.Item);
    }
  });
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
