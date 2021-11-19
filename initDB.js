const mysql = require("mysql");

//create a connection to the GCP server
let conn = mysql.createConnection({
  host: "35.193.35.34",
  user: "root",
  password: "SE3316Database",
  database: "timeDB",
});

conn.connect(); //establish the connection
//drop the table
conn.query(`DROP TABLE Time`, (err, rows, fields) => {
  if (err) console.log(err);
  else console.log("Table Dropped");
});
//create the table
conn.query(
  `CREATE TABLE Time
        (
            timeCol1 varchar(100),
            timeCol2 varchar(100),
            timeCol3 varchar(100),
            timeCol4 varchar(100),
            timeCol5 varchar(100),
            timeCol6 varchar(100),
            timeCol7 varchar(100),
            timeCol8 varchar(100),
            timeCol9 varchar(100),
            timeCol10 varchar(100)
        )
          `,
  (err, rows, fields) => {
    if (err) console.log(err);
    else console.log("Table Created");
  }
);
// {"desc":"Table","price":"200","imgPath":"/imgs/Table.jpg"},
//insert to table
conn.query(
  `INSERT INTO Time VALUES ("1", "2", "3", "4", "5", "6", "7", "8", "9", "10") `,
  (err, rows, fields) => {
    if (err) console.log(err);
    else console.log("Table Created");
  }
);
//Select
conn.query(`SELECT * FROM Time`, (err, rows, fields) => {
  if (err) console.log(err);
  else console.log("One row inserted");
  for (r of rows) console.log(r); //print the contents of the row
});

conn.end(); //end the connection
