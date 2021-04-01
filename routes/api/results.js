const router = require("express").Router();
const Results = require("../../controllers/results");

// Matches with client side "/api/user"
router.route("/")
    .get(Results.findLast)
    .get(Results.findAll)
    .put(Results.update)
    .post(Results.create);
    
module.exports = router;
