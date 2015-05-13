var express = require("express");
var RString = require("randomstring");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
var views = path.join(process.cwd(), "views")

// var urls = [];
var urls = {};





app.get("/", function (req, res) {
    res.send("Hello World");
});

app.listen(3000, function (req, res) {
    console.log("working!!")
});

app.get("/", function (req, res) {
    var homePath = path.join(views, "home.html");
    res.sendFile(homePath);
});

app.post("/urls", function (req, res) {
	var key = RString.generate();
    var newUrl = req.body.url;
    urls.push(newUrl);
    var index = urls.length - 1;
    res.send("View your url at localhost:3000/urls/" + index);
});

app.get("/urls/:index", function (req, res) {
    var url = urls[req.params.index];
    res.redirect(url);
});







