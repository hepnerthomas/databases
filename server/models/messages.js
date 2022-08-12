var db = require('../db');

module.exports = {
  // a function which produces all the messages
  getAll: function () {
    // I - none
    // O - result from query
    // C -
    // E -
    db.dbConnection.connect();
    db.dbConnection.query(`SELECT * FROM Messages`, function(err, results, fields) {
      return results;
    });
    // db.dbConnection.end();
  },

  // a function which can be used to insert a message into the database
  create: function () {

  }
};
