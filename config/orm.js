// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function(err, result) {
      if (err) {
        console.log(err);
      }
      cb(result);
    });
  },
  insertOne: function(burger_name, devoured, cb) {
    var queryString = `INSERT INTO burgers_db.burgers
    (burger_name, devoured)
    VALUES('${burger_name}',${devoured});`;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(burger_name, devoured, id, cb) {
    var queryString = `UPDATE burgers_db.burgers
    SET burger_name='${burger_name}', devoured=${devoured}
    WHERE id=${id};`;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
