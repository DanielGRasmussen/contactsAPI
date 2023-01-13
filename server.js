const routes = require("./controller/main");
const express = require("express");
const app = express();

app.get("/", function(req, res) {
    routes.main(req, res);
});

app.get("/contacts", function(req, res) {
    routes.contacts(req, res);
});

app.get("/contacts/:id", function(req, res) {
    routes.contactById(req, res);
});

app.listen(8080, function() {
    console.log("Listening on port 8080");
});