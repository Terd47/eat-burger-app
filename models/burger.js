// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll( function(res) {
      console.log('inside burger.all')
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(burger_name, devoured, cb) {
    orm.insertOne(burger_name, devoured, function(res) {
      cb(res);
    });
  },
  update: function(burger_name, devoured, id, cb) {
    orm.updateOne(burger_name, devoured, id, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
