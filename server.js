var express = require("express");

var app = express();

var PORT = 3010;


var available_tables = [];

var waiting_list = [];



app.get("/", function(req, res) {
    res.send("Welcome to the Restaurant reservation Page!");
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);

});

