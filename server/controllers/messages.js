var models = require('../models');

module.exports = {
  // a function which handles a get request for all messages
  get: function (req, res) {
    // res = models.messages.getAll()
    res.status(200).send(models.messages.getAll());

    // res.send() or res.json()?
  },

  // a function which handles posting a message to the database
  post: function (req, res) {}
};
