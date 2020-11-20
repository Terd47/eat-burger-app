// Set up MySQL connection.
let mysql = require("mysql");

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = connection = mysql.createConnection({
    host: "	aqx5w9yc5brambgl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "qehxc1qzodz1s7pe",
    password: "sfh74uesmwiiae2w",
    database: "r00zhssibmwqwdgv"
  });
}

// Connecting to mysql database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection to ORM to use.
module.exports = connection;
