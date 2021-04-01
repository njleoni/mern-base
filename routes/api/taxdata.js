//* needs to be updated for our routes

const router = require("express").Router();
const taxController = require("../../controllers/tax");

// Matches with "/api/tax"
router.route("/").get(taxController.findAll);

module.exports = router;
