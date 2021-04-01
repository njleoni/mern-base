const router = require("express").Router();
const taxRoutes = require("./taxdata");
const resultRoutes = require("./results");
const allResults = require("./allResults");
const userRoutes = require("./users");

//* routes for each api, that then use the controller.
router.use("/tax", taxRoutes);
router.use("/save", userRoutes);
router.use("/answers", resultRoutes);
router.use("/results", allResults);

module.exports = router;
