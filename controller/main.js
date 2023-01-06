const routes = require("../routes/main");
const express = require("express");
const app = express();

app.get("/", function(req, res) {
    routes.main(req, res)
});

app.listen(8080, function() {
    console.log("Listening on port 8080");
});