const express = require("express");

const app = express();

//serve static contents
app.use(express.static("static"));

app.listen(80);
