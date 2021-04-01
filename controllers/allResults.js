const db = require("../models");

// Defining methods for the userController
module.exports = {
  //* this is not working
  findAll: function(req, res) {
    db.Results.find(req.query)
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
  }
};
