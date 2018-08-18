var express = require("express");

var app = express();
var path = require("path");

var bodyParser = require("body-parser");


var PORT = 3010;


var available_tables = [];

var waiting_list = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);

});

app.get("/api/tables", function(req, res) {
    return res.json(tables.json);

});




