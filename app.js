const mysql = require("mysql");
const dbconfig = require("./data/database.js");
const { accessSpreadsheet } = require("./util/makeSpread");
const { sendSlackMessage } = require("./util/sendSlackMessage");
const connection = mysql.createConnection(dbconfig);
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/view"));
app.use('/admin_manage/update',express.static(__dirname + "/view"));
console.log(__dirname)
app.set("views", __dirname + "/view");
app.set("view engine", "ejs");


app.get("/model_apply", function (req, res) {
  res.sendFile(path.join(__dirname, "view", "apply.html"));
});

app.get("/apply", function (req, res) {
  // res.sendFile(path.join(__dirname, "view", "apply.html"));
  console.log(req.query);
  accessSpreadsheet(
    req.query.phone,
    req.query.name,
    req.query.pickupDate,
    req.query.pickupPlace,
    req.query.address,
    req.query.payment
  );
  sendSlackMessage();
  res.redirect("https://oneulook-web.s3.ap-northeast-2.amazonaws.com/submit.html");
});


app.listen(80);
