var express = require("express");
var bodyParser = require ("body-parser");
var path = require("path");
var ejs = require("ejs");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended":false}));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"views")));

app.set("view engine",ejs);
app.set(express.static(path.join(__dirname,"views")));

var logger = function(req,res,next){
  console.log("Logging...");
  next();
};

app.use(logger);

app.get("/",function(req,res){
  res.render("home.ejs");
})

app.listen(3000,function(){
  console.log("Server Started at 3000...")
});
