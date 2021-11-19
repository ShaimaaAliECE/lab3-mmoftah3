const mysql = require("mysql");

//function to create a connection to the GCP server
function newConnection() {
  let conn = mysql.createConnection({
    host: "35.193.35.34",
    user: "root",
    password: "SE3316Database",
    database: "timeDB",
  });

  return conn;
}

//export the function
module.exports = newConnection;
