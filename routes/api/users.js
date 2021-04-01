//* needs to be updated for our routes

const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with client side "/api/user"
router.route("/")
    .post(userController.create)
    .get(userController.get);
module.exports = router;