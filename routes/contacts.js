const express = require("express");
const router = express.Router();
const contactsController = require("../controller/contacts");

router.get("/", contactsController.contacts);

router.get("/:id", contactsController.contactById);

module.exports = router;
