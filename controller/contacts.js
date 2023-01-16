const mongo = require("../mongo");

exports.contacts = function (req, res) {
	mongo.get().then((contacts) => {
		res.send(contacts);
	});
};

exports.contactById = function (req, res) {
	const id = req.params.id;
	mongo.getById(id).then((contact) => {
		if (contact) {
			res.send(contact);
		} else {
			res.send("Contact not found");
		}
	});
};
