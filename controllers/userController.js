const db = require("../models");

// Defining methods for the userController
module.exports = {
  //* this is working
  create: function(req, res) {
    console.log(req.body);
    db.Users.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //* this is working
  get: function(req, res) {
    console.log(req.query);
    db.Users.find({
      username: { $regex: new RegExp(req.query.q, 'i')}
    })
      .then(user => res.json(user))
      .catch(err => res.status(422).end());
  }
};
