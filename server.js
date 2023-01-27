const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const app = express();

app.use(express.json())
	.use(cors())
	.use((req, res, next) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		next();
	})
	.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
	.use("/contacts", require("./routes/contacts"))
	.listen(8080, function () {
		console.log("Listening on port 8080");
	});
