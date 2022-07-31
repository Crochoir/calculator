const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.listen(3000, function() {
  console.log("server has started");
});

app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {
var height = parseFloat(req.body.height);
var weight = parseFloat(req.body.weight);
var BMI = weight / (height * height);
if (BMI >= 25) {
  res.send("your Bmi is " + BMI + ", unfortunately you are overweight");
} else {
  res.send("you Bmi is " + BMI + ", this number is at a healthy level.");
}


});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {

 var num1 = Number(req.body.num1);
 var num2 = Number(req.body.num2);
   var result = num1 + num2;
  console.log(result);
  res.send("result is " + result);
});
