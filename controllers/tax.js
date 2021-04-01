
const db = require("../models");


module.exports = {
  findAll: function (req, res) {
    db.TaxData.find(req.query)

      .then((taxdata) => res.json(taxdata))
      .catch((err) => res.status(422).json(err));
  },
};
