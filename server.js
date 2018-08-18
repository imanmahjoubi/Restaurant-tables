var express = require("express");

var app = express();
var path = require("path");

var bodyParser = require("body-parser");


var PORT = 3010;

var available_tables = [
    {
        "name" : "Imen",
        "Phone" : "4242424242",
        "Email" : "imen@gmail.com",
        "unique_id" : "1233"
    },
    {
        "name" : "alex",
        "Phone" : "4242111142",
        "Email" : "alex@gmail.com",
        "unique_id" : "2222"
    }

];

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
    return res.json(available_tables);
    console.log(available_tables);

});
app.get("/api/tables/:table", function(req, res) {
    var chosen = req.params.table;

    console.log(chosen);

    for (var i = 0; i < available_tables.length; i++) {
        if (chosen === available_tables[i].unique_id) {
            return res.json(available_tables[i]);
        }
    }

    return res.json(false);
});

app.post("/api/tables", function(req, res) {

    var newtable = req.body;
    console.log(newtable);
    available_tables.push(newtable);
    res.json(newtable);
});












