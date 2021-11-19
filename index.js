const express = require("express");

//use the sql connection
//use the newConnection function
const newConnection = require("./DBConnection");

const app = express();

//serve static contents
app.use(express.static("static"));

//to use the loding-form
app.use(
  express.urlencoded({
    extended: true,
  })
);

//information for the admin to login
app.post("/login", (req, res) => {
  let userName = req.body.usr;
  let password = req.body.pwd;
  let message = "Access Denied";

  if (userName == "admin" && password == "time123") {
    message = "Welcome Admin!";
    //go to the admin page
    res.redirect("adminPage.html");
  }
  res.send(message);
});

//handler to add or edit the time
app.get("/addTime", (req, res) => {
  let conn = newConnection();
  conn.connect();
  //to access outside
  let timeList;
  conn.query(
    `INSERT INTO Time VALUES ('${req.query.time1}', '${req.query.time2}', '${req.query.time3}', '${req.query.time4}', '${req.query.time5}','${req.query.time6}', '${req.query.time7}','${req.query.time8}', '${req.query.time9}', '${req.query.time10}')`,
    (err, rows, fields) => {
      res.redirect("/times");
    }
  );

  conn.end();
});

//handler to list the products
app.get("/times", (request, response) => {
  let conn = newConnection();
  conn.connect();
  //to access outside
  let timeList;
  //select only the columns timCol1 and Timecol2
  conn.query(
    `SELECT timeCol1, timeCol2, timeCol3, timeCol4, timeCol5, timeCol6, timeCol7, timeCol8, timeCol9, timeCol10 FROM Time `,
    (err, rows, fields) => {
      timeList = rows; //now guuanry that it will work
      let content = "";
      //read from database
      for (t of timeList) {
        content += "</br>";
        content += "Submission:   ";
        content +=
          "Time 1: " +
          t.timeCol1 +
          "  Time 2: " +
          t.timeCol2 +
          "  Time 3: " +
          t.timeCol3 +
          "  Time 4: " +
          t.timeCol4 +
          "  Time 5: " +
          t.timeCol5 +
          "  Time 6: " +
          t.timeCol6 +
          "  Time 7: " +
          t.timeCol7 +
          "  Time 8: " +
          t.timeCol8 +
          "  Time 9: " +
          t.timeCol9 +
          "  Time 10: " +
          t.timeCol10;
        content += "\n";
        content += "</br>";
      }

      response.send(content);
    }
  );

  conn.end();
});

//add data to the Guest table
app.get("/add-guest", (req, res) => {
  let conn = newConnection();
  conn.connect();
  conn.query(
    `INSERT INTO Guest VALUES ('${req.query.guest}','${req.query.time1}','${req.query.t2}','${req.query.t3}','${req.query.t4}','${req.query.t5}','${req.query.t6}','${req.query.t7}','${req.query.t8}','${req.query.t9}','${req.query.t10}')`,
    (err, rows, fields) => {
      res.redirect("/schedule");
    }
  );

  conn.end();
});

//adding the choices of the guest
//displays the data from the Guest table
app.get("/schedule", (req, res) => {
  let conn = newConnection();
  let guestList;
  conn.connect();
  conn.query(`SELECT * FROM Guest`, (err, rows, fields) => {
    guestList = rows;
    let content = "";
    for (g of guestList) {
      content += "<div>";
      content +=
        g.nameCol +
        ":" +
        g.timeOne +
        "," +
        g.timeTwo +
        "," +
        g.timeThree +
        "," +
        g.timeFour +
        "," +
        g.timeFive +
        "," +
        g.timeSix +
        "," +
        g.timeSeven +
        "," +
        g.timeEight +
        "," +
        g.timeNine +
        "," +
        g.timeTen;
      content += "</div>";
      content += "\n";
    }
    res.send(content);
  });
  conn.end();
});

//listen at port 80
app.listen(80);
