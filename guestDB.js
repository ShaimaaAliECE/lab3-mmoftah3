const mysql = require("mysql");

//create a connection to the GCP server
let conn = mysql.createConnection({
  host: "35.193.35.34",
  user: "root",
  password: "SE3316Database",
  database: "timeDB",
});

conn.connect();

conn.query(`DROP TABLE Guest`, (err, rows, fields) => {
  if (err) console.log(err);
  else console.log("Table Dropped");
});

conn.query(
  `CREATE TABLE Guest
            (
                nameCol varchar (100),
                timeOne varchar(100),
                timeTwo varchar(100),
                timeThree varchar(100),
                timeFour varchar(100),
                timeFive varchar(100),
                timeSix varchar(100),
                timeSeven varchar(100),
                timeEight varchar(100),
                timeNine varchar(100),
                timeTen varchar(100)
            )
            `,
  (err, rows, fields) => {
    if (err) console.log(err);
    else console.log("Table Created");
  }
);
conn.query(
  `INSERT INTO Guest VALUES ("Guest","7","7","7","7","7","7","7","7","7","7")`,
  (err, rows, fields) => {
    if (err) console.log(err);
    else console.log("One row inserted");
  }
);

conn.query(`SELECT * FROM Guest `, (err, rows, fields) => {
  if (err) console.log(err);
  else console.log("One row inserted");
  for (r of rows) console.log(r);
});
conn.end();
