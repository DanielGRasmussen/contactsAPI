const express = require("express");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
	.use(express.json())
	.use("/", require("./routes/index"))
	.use("/contacts", require("./routes/contacts"))
	.listen(3000, function () {
		console.log("Listening on port 3000");
	});
