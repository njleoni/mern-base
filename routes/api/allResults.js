const router = require("express").Router();
const AllResults = require("../../controllers/allResults");

// Matches with client side "/api/user"
router.route("/")
    .get(AllResults.findAll)
    
module.exports = router;