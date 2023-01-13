const express = require("express");
const app = express();

app.use("/", require("./routes/index"));
app.use("/contacts", require("./routes/contacts"));

app.listen(8080, function() {
    console.log("Listening on port 8080");
});