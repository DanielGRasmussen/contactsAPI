const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", require("./routes/index"));
app.use("/contacts", require("./routes/contacts"));
app.listen(8080, function () {
	console.log("Listening on port 8080");
});
