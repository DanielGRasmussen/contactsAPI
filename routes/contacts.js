const express = require("express");
const router = express.Router();
const contactsController = require("../controller/contacts");

router.get("/", contactsController.getAll);

router.get("/contact/:id", contactsController.getSingle);

router.get("/createContact/", contactsController.createContact);

router.get("/updateContact/:id", contactsController.updateContact);

router.get("/deleteContact/:id", contactsController.deleteContact);

router.post("/", contactsController.createContactT);

module.exports = router;
