const mongo = require("../mongo");

exports.getAll = function (req, res) {
	mongo.getAll().then((contacts) => {
		res.setHeader("Content-Type", "application/json").json(contacts).status(200);
	});
};

exports.getSingle = function (req, res) {
	const id = req.params.id;
	mongo.getById(id).then((contact) => {
		if (contact) {
			res.setHeader("Content-Type", "application/json").json(contact).status(200);
		} else {
			res.send("Contact not found").status(404);
		}
	});
};

exports.createContact = function (req, res) {
	const doc = {
		firstName: "Daniel",
		lastName: "Rasmussen",
		email: "danielgrasmussen42@gmail.com",
		favoriteColor: "blue",
		birthday: "5/21/05"
	};

	mongo.post(doc).then((id) => {
		if (id) {
			res.send(id).status(201);
		} else {
			res.send("Creation failed").status(404);
		}
	});
};

exports.createContactT = function (req, res) {
	const doc = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		favoriteColor: req.body.favoriteColor,
		birthday: req.body.birthday
	};

	mongo.post(doc).then((id) => {
		if (id) {
			res.send(id).status(201);
		} else {
			res.send("Creation failed").status(404);
		}
	});
};

exports.updateContact = function (req, res) {
	const id = req.params.id;
	const doc = {
		firstName: "Daniel",
		lastName: "Rasmussen",
		email: "danielgrasmussen42@gmail.com",
		favoriteColor: "purple",
		birthday: "5/21/05"
	};

	mongo.put(id, doc).then((status) => {
		res.status(status);
	});
	res.send(doc);
};

exports.deleteContact = function (req, res) {
	const id = req.params.id;
	mongo.delete(id).then((status) => {
		if (status == 200) {
			res.send("Deleted").status(status);
		} else {
			res.send("Deletion failed").status(status);
		}
	});
};
