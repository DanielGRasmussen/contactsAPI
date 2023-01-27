const swaggerAutogen = require("swagger-autogen")();

const doc = {
	info: {
		title: "My API",
		description: "Description"
	},
	host: "cse341-anr0.onrender.com",
	schemes: ["http", "https"]
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js", "./routes/index.js"];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
// 	await import("./server.js");
// });
