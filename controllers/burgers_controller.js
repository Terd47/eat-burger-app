var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log('testing testing')
  burger.all(function(data) {
    console.log('testing this thing now')
    let burgerObject = {
      burger: data
    };
    console.log(burgerObject);

    res.render("index", burgerObject);
  });
});

router.post("/api/burger", function(req, res) {
  burger.create(
    req.body.burger_name, req.body.devoured, function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger", function(req, res) {

  burger.update(req.body.burger_name,req.body.devoured, req.body.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
