const mongo = require('../mongo');

exports.main = function(req, res) {
    res.send("Linda Rasmussen");
};

exports.contacts = function(req, res) {
    console.log("Contacts")
    mongo.get().then(contacts => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
        console.log("Contacts sent")
    })
};

exports.contactById = function(req, res) {
    const id = req.params.id;
    mongo.getById(id).then(contact => {
        if(contact) {
            res.send(contact);
        } else {
            res.send("Contact not found");
        }
    })
}